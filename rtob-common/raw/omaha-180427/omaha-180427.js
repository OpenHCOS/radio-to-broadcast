const csvjson = require("csvjson");
const fs = require("fs");
const path = require("path");

const dataProblem = fs.readFileSync(
  path.join(__dirname, "OmahaSystem三大表格-42項問題表.csv"),
  { encoding: "utf8" }
);

const dataSign = fs.readFileSync(
  path.join(__dirname, "OmahaSystem三大表格-問題與徵兆對照表.csv"),
  { encoding: "utf8" }
);

const dataIntervension = fs.readFileSync(
  path.join(__dirname, "OmahaSystem三大表格-介入措施.csv"),
  { encoding: "utf8" }
);

var options = {
  delimiter: ",", // optional
  quote: '"' // optional
};

const domainMap = {
  D1: "ENV",
  D2: "PSY",
  D3: "PHY",
  D4: "HEAL",
}

var problem = csvjson
  .toObject(dataProblem, options).map(v=>{
    const r = {}
    //  '問題類型': '08.用藥習慣',
    r.name =  v["問題類型"].substring(3)
    r.nameEn = v["英文原文"]
    // '面向名稱': 'D4.健康相關行為面向',
    const domainArr = v["面向名稱"].split(".")
    r.domain = domainMap[domainArr[0]]
    r.code = v["代碼"]
    r.id = `${r.domain}${r.code}`
    return r;
  })

  /*
   {
            "domain": "D1.環境面向",
            "domainid": "D1",
            "problemid": "1",
            "id": "1",
            "nameEn": "low/no income",
            "name": "低或無收入"
        },
  */
var sign = csvjson
  .toObject(dataSign, options).map(v=>{
    const r = {}
    r.name = v.name
    r.nameEn = v.nameEn
    r.code = v.id
    //r.domain = v.domainid
    r.problem = `${domainMap[v.domainid]}${v.problemid}`
    r.id = `${r.problem}-${v.id}`
    return r;
  })

var target = csvjson
  .toObject(dataIntervension, options).map(v=>{
    const r = {}
    r.id = `T${v.id}`
    r.name = v.name
    r.nameEn = v.nameEn
    return r;
  })

const result = {
  domain: {
    ENV: {
      name: "環境面向",
      nameEn: "Environmental Domain"
    },
    PSY :{
      name: "心理社會面向",
      nameEn: "Psychosocial Domain"
    },
    PHY :{
      name: "生理面向",
      nameEn: "Physiological Domain"
    },
    HEAL :{
      name: "健康相關行為面向",
      nameEn: "Health-related Behaviors Domain"
    }
  },

  interventionCategory:{
    "TGC": {
      name: "教學、引導、諮商",
      nameEn: "Teaching/Guidance/Counseling"
    },
    "TP": {
      name: "治療與程序",
      nameEn: "Treatments/Procedures"
    },
    "CM": {
      name: "個案管理",
      nameEn: "Case Management"
    },
    "S": {
      name: "監督",
      nameEn: "Surveillance"
    }
  },
  problem : problem,
  sign : sign,
  interventionTarget: target
}

fs.writeFileSync(
  path.join(__dirname, "omaha-180427.json"),
  JSON.stringify(result, null, 4),
  { encoding: "utf8" }
);
