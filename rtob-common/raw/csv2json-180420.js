// schema
// Service - schema.org http://schema.org/Service
// ItemList - schema.org http://schema.org/ItemList
// OfferCatalog - schema.org http://schema.org/OfferCatalog
// Person - schema.org http://schema.org/Person
// https://stackoverflow.com/questions/47511412/schema-org-for-category-page
//
var csvjson = require("csvjson");
var fs = require("fs");
var path = require("path");
var data = fs.readFileSync(
  path.join(__dirname, "calc-service-codes-180420.csv"),
  { encoding: "utf8" }
);
var options = {
  delimiter: ",", // optional
  quote: '"' // optional
};
/*
{
        "AA": "",
        "編號": "AA05",
        "照顧組合": "照顧困難之服務加計",
        "給（支）付價格（元）": "100",
        "原民區或離島支付價格（元）": "120",
        "": ""
    },
*/
var x = csvjson
  .toObject(data, options)
  .map(v => {
    const r = {};
    // "編號": "BA06"
    r.id =  v["編號"]
    r.serviceType = v["照顧組合"]
    r.price = parseInt(v["給（支）付價格（元）"])
    r.priceRemote = parseInt(v["原民區或離島支付價格（元）"])
    return r;
  }).filter(v2 => {
    return v2.id.match(/^[A-Z]+/)
  })
  
var x2 = x.reduce((map,obj)=>{
    map[obj.id] = obj
    delete obj.id
    obj.price  = obj.price ? obj.price : 0
    obj.priceRemote  = obj.priceRemote ? obj.priceRemote : 0
    return map
  }, {});

fs.writeFileSync(
  path.join(__dirname, "calc-service-codes-180420.json"),
  JSON.stringify(x2, null, 4),
  { encoding: "utf8" }
);

var result = {
  "@context": "https://openhcos.github.io/radio-to-broadcast/schema/service-codes-180420.ld.json",
  "@schema":"https://openhcos.github.io/radio-to-broadcast/schema/service-codes-180420.schema.json",
  "@id": "https://https://openhcos.github.io/radio-to-broadcast/service-codes-181420",
  serviceMap: x2
};

fs.writeFileSync(
  path.join(__dirname, "service-codes-180420.json"),
  JSON.stringify(result, null, 4),
  { encoding: "utf8" }
);
