const expect = require('chai').expect;
const fs = require('fs');
var paletteBitmapBuffer = fs.readFileSync(__dirname + '/palette-bitmap.bmp');
var nonPaletteBitmapBuffer = fs.readFileSync(__dirname + '/non-palette-bitmap.bmp');


describe('test the bitmap buffer', function() {
  debugger;
  it('should check the size of the buffers', function() {
    expect(paletteBitmapBuffer.length).to.eql(11078);
    expect(nonPaletteBitmapBuffer.length).to.eql(30054);
  });
});
