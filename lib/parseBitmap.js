'use strict';

const bitmapInfo = function(imageBuffer, cb) {
  let parsedImage = {};

  if (imageBuffer.toString(0, 2) != 'BM') {
    return cb('invalid format');
  }

  parsedImage.size = imageBuffer.readUInt32LE(2);
  parsedImage.offSet = imageBuffer.readUInt32Le(10);
  parsedImage.width = imageBuffer.readInt32LE(18);
  parsedImage.height = imageBuffer.readInt32LE(22);
  parsedImage.bitsPerPixel = imageBuffer.readUInt16LE(28);
  parsedImage.pixelSize = imageBuffer.readUInt32LE(34);
  parsedImage.colorPalette = imageBuffer.readUInt32LE(46);
  parsedImage.pixelArray = imageBuffer.slice(parsedImage.offSet);

  const padding = (Math.ceil((parsedImage.width * 3) / 4) * 4) - (parsedImage.width * 3);

  parsedImage.transformPixel = function (x, y, r, g, b) {
    const pixelLoc = (x + (100 * y)) * 3;
    const pixelLocWithPadding = pixelLoc + (padding * y);
    parsedImage.pixelArray[pixelLocWithPadding] = b;
    parsedImage.pixelArray[pixelLocWithPadding + 1] = g;
    parsedImage.pixelArray[pixelLocWithPadding + 2] = r;
  };

  parsedImage.getPixelValue = function (x , y) {
    const pixelLoc = (x + (100 * y)) * 3;
    const pixelLocWithPadding = pixelLoc + (padding * y);
    return [parsedImage.pixelArray[pixelLocWithPadding + 2], parsedImage.pixelArray[pixelLocWithPadding + 1], [parsedImage.pixelArray[pixelLocWithPadding]]];
  };
  cb(null, parsedImage);
};


module.exports = bitmapInfo;
