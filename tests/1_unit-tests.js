const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('Read a whole number input', function(done) {
        let input = '32L';
        assert.equal(convertHandler.getNum(input), 32);
        done();
      });
    
    test('Read a decimal number input', function(done) {
        let input = '3.2L';
        assert.equal(convertHandler.getNum(input), 3.2);
        done();
      });
    
    test('Read a fractional input', function(done) {
        let input = '1/2L';
        assert.equal(convertHandler.getNum(input), 0.5);
        done();
      });
    
    test('Read a fractional input with a decimal', function(done) {
        let input = '5.4/3L';
        assert.equal(convertHandler.getNum(input), 1.8);
        done();
      });
    
    test('Return an error on a double-fraction (i.e. 3/2/3)', function(done) {
        let input = '3/2/3L';
        assert.equal(convertHandler.getNum(input), null);
        done();
      });
    
    test('Default to a numerical input of 1 when no numerical input is provided', function(done) {
        let input = 'L';
        assert.equal(convertHandler.getNum(input), 1);
        done();
      });
    
    test('Read each valid input unit', function(done) {
        let input = '32L';
        assert.equal(convertHandler.getUnit(input), 'L');
        done();
      });
    
    test('Return an error for an invalid input unit', function(done) {
        let input = '32g';
        assert.equal(convertHandler.getUnit(input), null);
        done();
      });
    
    test('Return the correct return unit for each valid input unit', function(done) {
        let input = 'gal';
        let expected = 'L';
        assert.equal(convertHandler.getReturnUnit(input), expected);
        done();
      });
    
    test('Return the spelled-out string unit for each valid input unit', function(done) {
        let input = 'gal';
        let expected = 'gallons';
        assert.equal(convertHandler.spellOutUnit(input), expected);
        done();
      });
    
    test('Convert gal to L', function(done) {
        let input = [5, 'gal'];
        let expected = 18.9271;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });
    
    test('Convert L to gal', function(done) {
        let input = [5, 'L'];
        let expected = 1.32086;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });
    
    test('Convert mi to km', function(done) {
        let input = [5, 'mi'];
        let expected = 8.0467;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });
    
    test('Convert km to mi', function(done) {
        let input = [5, 'km'];
        let expected = 3.10686;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });
    
    test('Convert lbs to kg', function(done) {
        let input = [5, 'lbs'];
        let expected = 2.26796;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });
    
    test('Convert kg to lbs', function(done) {
        let input = [5, 'kg'];
        let expected = 11.0231;
        assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
        done();
      });

});