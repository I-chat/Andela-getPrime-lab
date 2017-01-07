var getPrimes = require('../lib/getPrimes.js');
describe("Array containing prime number generation tests ", function() {
  describe("Case for array of consecutive prime numbers", function() {

    it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return 'no prime numbers' for 2", function() {
      expect(getPrimes(2)).toEqual('no prime numbers');
    });

    it("should return [2, 3, 5, 7, 11, 13]", function() {
      expect(getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 31]", function(3) {
      expect(getPrimes(31)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 31]);
    });

  });