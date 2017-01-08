// Asymtomatic analysis of this function where n = the size of input

var getPrimes = function(num) {             //        O(1)
  var primeArray = [];
  for (var i = 2; i <= num; i++) {          //   O(n-2) where n = size of input
    var prime = true;
    if (i % 2 !==0 || i !== 2) {//the only even number we need to test is 2
      for (var j = 2; j <= Math.sqrt(i); j++) {   //O(a**0.5)
        if (i % j === 0 && j !== i) {
          prime = false;
        }
      }
    }
    if (prime === true) {
      primeArray.push(i);
    }
  }
  if (primeArray.length === 0) {
    return "No prime number found."
  } else {
    return primeArray;
  }
}

module.exports = getPrimes;

// Other statement aside loops have a time complexity of O(1)
// The first loop will given an input size of n-2 will run n times
// The nested loop will however loop O(a**0.5)^2 times
// where a is all odd numbers from n-2 including 2
// Hence in the worst case senerio the whole function will run O(a**0.5)^2 times