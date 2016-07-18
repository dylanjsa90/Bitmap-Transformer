const expect = require('chai').expect;
const fs = require('fs');
var paletteBitmapBuffer = fs.readFileSync(__dirname + '/palette-bitmap.bmp');
var nonPaletteBitmapBuffer = fs.readFileSync(__dirname + '/non-palette-bitmap.bmp');
var size = paletteBitmapBuffer.readUInt32LE(2);
var bitmapWidth = paletteBitmapBuffer.readInt32LE(18);
var bitmapHeight = paletteBitmapBuffer.readInt32LE(22);
var bitsPerPixelPalette = paletteBitmapBuffer.readUInt16LE(28);
var bitsPerPixelNonPalette = nonPaletteBitmapBuffer.readUInt16LE(28);

describe('test the bitmap buffer', function() {
  it('should check the size of the buffers', function() {
    expect(size).to.eql(11078);
    expect(bitmapWidth).to.eql(100);
    expect(bitmapHeight).to.eql(100);
    expect(bitsPerPixelPalette).to.eql(8);
    expect(bitsPerPixelNonPalette).to.eql(24);

  });

  // it('should check for errors on transform name', () => {
  //
  // })
});
