var csvjson = require('csvjson');
var fs = require('fs');
var path = require('path');
var data = fs.readFileSync(path.join(__dirname, 'calc-service-codes-180420.csv'), { encoding : 'utf8'});
var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };
var x = csvjson.toObject(data, options);
fs.writeFileSync(path.join(__dirname, 'calc-service-codes-180420.json'), JSON.stringify(x, null, 4), {encoding: 'utf8'});