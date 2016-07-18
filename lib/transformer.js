'use strict';
const transformer = module.exports = exports = {};
const fs = require('fs');

transformer.read = function(file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) console.log(err);
    cb(null, data);
  });
};

transformer.transform = function(file, start, arg) {
  for (let i = start; i < file.length; i += 3) {
    if(arg === 'red') {
      file[i+2] = 255;
    } else if (arg === 'green') {
      file[i+1] = 255;
    } else if(arg === 'blue') {
      file[i] = 255;
    } else if(arg === 'invert') {
      file[i] = 255 - file[i];
      file[i+1] = 255 - file[i+1];
      file[i+2] = 255 - file[i+2];
    }
  }
  fs.writeFile('lib/' + arg + '-transform.bmp', file, function(err) {
    if (err) console.log(err);
  });
};
