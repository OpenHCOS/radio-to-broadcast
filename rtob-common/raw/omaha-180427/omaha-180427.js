const csvjson = require("csvjson");
const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(
  path.join(__dirname, "OmahaSystem三大表格-42項問題表.csv"),
  { encoding: "utf8" }
);

var options = {
  delimiter: ",", // optional
  quote: '"' // optional
};

var problem = csvjson
  .toObject(data, options).map(v=>{
    const r = {}
    r.problem = v["問題類型"]
    r.problemEn = v["英文原文"]
    r.domain = v["面向名稱"]
    r.code = v["代碼"]
    return r;
  }).reduce((res,obj)=>{
    // group by domain
    const domainArr = obj.domain.split(".")
    const domain = domainArr[0]
    res[domain] = res[domain] || [];
    obj.domain = domainArr[1]
    obj.problem = obj.problem.substring(3)
    obj.signs = ['TODO']
    res[domain].push(obj);
    return res;
  },{})


const result = {
  domain : problem
}

fs.writeFileSync(
  path.join(__dirname, "omaha-180427.json"),
  JSON.stringify(result, null, 4),
  { encoding: "utf8" }
);
