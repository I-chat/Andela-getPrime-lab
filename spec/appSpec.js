var getPrimes = require('../lib/getPrimes.js');
describe("Array containing prime number generation tests ", function() {
  describe("Case for array of consecutive prime numbers", function() {

    it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return 2 for 2", function() {
      expect(getPrimes(2)).toEqual([2]);
    });

    it("should return [2, 3, 5, 7, 11, 13] for 13", function() {
      expect(getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31] for 31", function() {
      expect(getPrimes(31)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
    });

    it("should return 'No prime number found.' for 1", function() {
      expect(getPrimes(1)).toEqual("No prime number found.");
    });

    it("should return 'No prime number found.' for 0", function() {
      expect(getPrimes(1)).toEqual("No prime number found.");
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67 ] for 68", function() {
      expect(getPrimes(68)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
    })

    it("should return [2, 3, 5, 7, 11, 13, 17] for 18", function() {
      expect(getPrimes(18)).toEqual([ 2, 3, 5, 7, 11, 13, 17 ]);
    })

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {
      expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    })

    it("should return [2, 3, 5, 7] for 7", function() {
      expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
    })

  });
});