'use strict';
const transformer = {};
const fs = require('fs');

transformer.read = function(file, arg, cb) {
  fs.readFile(file, (err, data) => {
    if (err) console.log(err);
    transformer.type = data.toString('ascii', 0, 2);
    transformer.size = data.readUInt16LE(2);
    transformer.width = data.readUInt32LE(18);
    transformer.height = data.readInt32LE(22);
    transformer.start = data.readInt16LE(10);
    transformer.bits = data.readUInt16LE(28);
    transformer.buffer = data;
    if (cb !== null) cb(data, arg);
  });
};

transformer.transform = function(file, arg) {
  for (let i = transformer.start; i < file.length; i += 3) {
    if(arg === 'red') {
      let avg = (file[i] + file[i+1] + file[i+2]) / 3;
      let scaled = avg + 70;
      if (avg + 70 > 255) scaled = 255;
      file[i] = avg;
      file[i+1] = avg;
      file[i+2] = scaled;

    }
    if (arg === 'green') {
      let avg = (file[i] + file[i+1] + file[i+2]) / 3;
      let scaled = avg + 70;
      if (avg + 70 > 255) scaled = 255;
      file[i] = avg;
      file[i+1] = scaled;
      file[i+2] = avg;
    }
    if(arg === 'blue') {
      let avg = (file[i] + file[i+1] + file[i+2]) / 3;
      let scaled = avg + 70;
      if (avg + 70 > 255) scaled = 255;
      file[i] = scaled;
      file[i+1] = avg;
      file[i+2] = avg;
    }
    if(arg === 'invert') {
      file[i] = 255 - file[i];
      file[i+1] = 255 - file[i+1];
      file[i+2] = 255 - file[i+2];
    }
    if (arg === 'grayscale') {
      let avg = (file[i] + file[i+1] + file[i+2]) / 3;
      file[i] = avg;
      file[i+1] = avg;
      file[i+2] = avg;
    }

  }
  fs.writeFile('./test/' + arg + '-transform.bmp', file, function(err) {
    if (err) console.log(err);
  });
};

module.exports = transformer;
