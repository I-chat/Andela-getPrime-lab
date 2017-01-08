var getPrimes = function(num) {
  var primeArray = [];
  for (var i = 2; i <= num; i++) {
    var prime = true;
    for (var j = 2; j < i; j++) {
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