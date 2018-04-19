'use strict';
const library = require('./src/library');
var rtob = module.exports

rtob.version = 'v' + require('./package.json').version;
rtob.sum = library.sum