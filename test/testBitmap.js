const expect = require('chai').expect;
const fs = require('fs');
const transformer = require('../lib/transformer');
var nonPalette = __dirname + '/non-palette-bitmap.bmp';

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

describe('the transformer', function() {
  it('should read red from the file', function() {
    transformer.read(nonPalette, function(err, data) {
      transformer.transform(data[54], bitmap.start, 'red').to.eql(255);
    });
  });
  it('should read green from the file', function() {
    transformer.read(nonPalette, function(err, data){
      tranformer.transform(data[55], bitmap.start, 'green').to.eql(255);
    });
  });
  it('should read blue from the file', function() {
    transformer.read(nonPalette, function(err, data) {
      transformer.transform(data[56], bitmap.start, 'blue').to.eql(255);
    });
  });
})
