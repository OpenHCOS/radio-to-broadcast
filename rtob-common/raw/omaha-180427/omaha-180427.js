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

var x = csvjson
  .toObject(data, options)

fs.writeFileSync(
  path.join(__dirname, "omaha-180427.json"),
  JSON.stringify(x, null, 4),
  { encoding: "utf8" }
);
