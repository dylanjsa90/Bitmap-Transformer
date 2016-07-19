const expect = require('chai').expect;
const fs = require('fs');
var nonPalette = __dirname + '/non-palette-bitmap.bmp';

describe('transformer tests', function() {
  var arrayOfBuffers = [];
  var randomPixel = getRandomInt(54, 1000);
  before(function(done) {
    fs.readFile(__dirname + '/red-transform.bmp', function(err, data) {
      arrayOfBuffers.push(data);
      fs.readFile(__dirname + '/green-transform.bmp', function(err, data) {
        arrayOfBuffers.push(data);
        fs.readFile(__dirname + '/blue-transform.bmp', function(err, data) {
          arrayOfBuffers.push(data);
          fs.readFile(__dirname + '/grayscale-transform.bmp', function(err, data) {
            arrayOfBuffers.push(data);
            fs.readFile(nonPalette, function(err, data) {
              arrayOfBuffers.push(data);
              done();
            });
          });
        });
      });
    });
  });

  it('should check redscale transformation', function() {
    expect(arrayOfBuffers[0][randomPixel]).to.eql(arrayOfBuffers[0][randomPixel + 1]);
    expect(arrayOfBuffers[1][randomPixel + 2]).to.not.eql(arrayOfBuffers[1][randomPixel + 1]);
  });

  it('should check the greenscale transformation', function() {
    expect(arrayOfBuffers[1][randomPixel]).to.eql(arrayOfBuffers[1][randomPixel + 2]);
    expect(arrayOfBuffers[1][randomPixel + 1]).to.not.eql(arrayOfBuffers[1][randomPixel]);
  });

  it('should check bluescale transformation', function() {
    expect(arrayOfBuffers[2][randomPixel + 2]).to.eql(arrayOfBuffers[2][randomPixel + 1]);
    expect(arrayOfBuffers[2][randomPixel]).to.not.eql(arrayOfBuffers[2][randomPixel + 1]);
  });

  it('should check the grayscale transformer', function() {
    expect(arrayOfBuffers[3][randomPixel]).to.eql(arrayOfBuffers[3][randomPixel + 1]);
    expect(arrayOfBuffers[3][randomPixel + 2]).to.eql(arrayOfBuffers[3][randomPixel + 1]);
  });

  it('check meta data', function() {
    expect(arrayOfBuffers[4].readUInt32LE(18)).to.eql(100);
    expect(arrayOfBuffers[4].readUInt32LE(22)).to.eql(100);
    expect(arrayOfBuffers[4].readUInt16LE(10)).to.eql(54);
    expect(arrayOfBuffers[4].readUInt32LE(28)).to.eql(24);
  });

});


function getRandomInt(min, max) {
  var rand = 5;
  while (rand % 3 !== 0)
    rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
}
