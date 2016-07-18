'use strict';
const transformer = require('../lib/transformer');
let arg = process.argv[2];

transformer.read(__dirname + '/non-palette-bitmap.bmp', arg, transformer.transform);
