'use strict';
const transformer = require('../lib/transformer');

var bitmap = {};
var arg = process.argv[2];

transformer.read(__dirname + '/non-palette-bitmap.bmp', function(err, data) {
  bitmap.type = data.toString('ascii', 0, 2);
  bitmap.size = data.readUInt16LE(2);
  bitmap.width = data.readUInt16LE(18);
  bitmap.height = data.readUInt16LE(22);
  bitmap.start = data.readUInt16LE(10);
  bitmap.bits = data.readUInt16LE(28);
  transformer.transform(data, bitmap.start, arg);
});
