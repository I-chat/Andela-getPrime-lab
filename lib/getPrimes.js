// Asymtomatic analysis of this function where n = the size of input

var getPrimes = function(num) {         //        O(1)
  var primeArray = [];
  for (var i = 2; i <= num; i++) {     //         O(n-2) where n = size of input
    var prime = true;   
    for (var j = 2; j < i; j++) {      //         O(n-2) this will however loop O(n-2)^2 times because it is nested within the first loop
      if (i % j === 0 && j !== i) {
        prime = false;
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

// All other statement aside the nested have a time complexity of O(1) which all adds up to 1.
// A loop will given an input size of n will run n times
// A nested  will however run loop O(n)^2
// Hence in the worst case senerio the whole function will run n(n)^2 times