'use strict';
const transformer = require('../lib/transformer');
var arg = process.argv[2];

transformer.read(__dirname + '/non-palette-bitmap.bmp', arg);

// function readArgv (err, data, transformer, arg) {
//   if (err) return console.log(err);
//   transformer.transform(data, transformer.start, arg);
// }
