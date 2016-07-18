const expect = require('chai').expect;
var nonPalette = __dirname + '/non-palette-bitmap.bmp';
const transformer = require('../lib/transformer');

describe('the transformer', function() {
  var randomPixelRed = (getRandomInt(1, 100) * 3 - 1);
  var randomPixelBlue = (getRandomInt(1, 100) * 3 - 3);
  var randomPixelGreen = (getRandomInt(1, 333) * 3 - 2);
  it('should read red from the file', function() {
    transformer.read(nonPalette, function(err, data) {
      transformer.transform(data, data.readUInt16LE(10) + randomPixelRed, 'red').to.eql(255);
    });
  });
  it('should read green from the file', function() {
    transformer.read(nonPalette, function(err, data){
      transformer.transform(data, data.readUInt16LE(10) + randomPixelGreen, 'green').to.eql(255);
    });
  });
  it('should read blue from the file', function() {
    transformer.read(nonPalette, function(err, data) {
      transformer.transform(data, data.readUInt16LE(10) + randomPixelBlue, 'blue').to.eql(255);
    });
  });
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
