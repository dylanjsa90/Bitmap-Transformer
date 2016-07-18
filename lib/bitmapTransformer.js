const fs = require('fs');
const parser = require('parseBitmap');

var paletteBitmapBuffer = fs.readFileSync('/test/palette-bitmap.bmp');
var nonPaletteBitmapBuffer = fs.readFileSync('/test/nonPaletteBitmap.bmp');

var headerSize = paletteBitmapBuffer.readUInt32(2);

var bitmapWidth = paletteBitmapBuffer.readInt32(18);
var bitmapHeight = paletteBitmapBuffer.readInt32(22);

var bitsPerPixel;

var transform = function() {
  

}
