(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.RtobCommon = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
const library = require('./src/library');
var rtob = module.exports

rtob.version = 'v' + require('./package.json').version;
rtob.sum = library.sum
},{"./package.json":2,"./src/library":3}],2:[function(require,module,exports){
module.exports={
  "name": "rtob-common",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build":"browserify index.js --standalone RtobCommon > dist/rtob-common.js",
    "test": "jest"
  },
  "keywords": [],
  "author": "y12studio@gmail.com",
  "license": "Apache-2.0",
  "dependencies": {
    "bip39": "^2.5.0"
  },
  "devDependencies": {
    "jest": "^22.4.3"
  }
}

},{}],3:[function(require,module,exports){
function sum(a,b){
    return a+b;
}

module.exports = {
    sum: sum
}
},{}]},{},[1])(1)
});
