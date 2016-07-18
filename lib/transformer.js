'use strict';
const transformer = {};
const fs = require('fs');

transformer.read = function(file, arg) {
  fs.readFile(file, (err, data) => {
    if (err) console.log(err);
    transformer.type = data.toString('ascii', 0, 2);
    transformer.size = data.readUInt16LE(2);
    transformer.width = data.readUInt16LE(18);
    transformer.height = data.readUInt16LE(22);
    transformer.start = data.readUInt16LE(10);
    transformer.bits = data.readUInt16LE(28);
    transformer.transform(data, transformer, arg);
  });
};

transformer.transform = function(file, bitmap, arg) {
  console.log(arg);
  for (let i = bitmap.start; i < file.length; i += 1) {
    if(arg === 'red' && file[i] % 3 === 2) {
      file[i] = 255;
    }
    if (arg === 'green' && file[i] % 3 === 1) {
      file[i] = 255;
    }
    if(arg === 'blue' && file[i] % 3 === 0) {
      file[i] = 255;
    }
    if(arg === 'invert') {
      file[i] = 255 - file[i];
    }
    if (arg === 'grayscale' && file[i] % 3 === 0) {
      var avg = (file[i] + file[i+1] + file[i+2]) / 3;
      file[i] = avg;
      file[i+1] = avg;
      file[i+2] = avg;
    }

  }
  fs.writeFile('lib/' + arg + '-transform.bmp', file, function(err) {
    if (err) console.log(err);
  });
};

module.exports = transformer;
