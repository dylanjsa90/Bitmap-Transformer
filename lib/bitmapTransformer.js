const fs = require('fs');

var paletteBitmapBuffer = fs.readFileSync('/test/palette-bitmap.bmp');
var nonPaletteBitmapBuffer = fs.readFileSync('/test/nonPaletteBitmap.bmp');
