/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function eratosthenesArray(n) {
  var primes = [];
  if (n > 2) {
      var half = n>>1;
      var sieve = Array(half);
      for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {
          if (!sieve[i]) {
              for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {
                  sieve[j] = true;
              }
          }
      }
      primes.push(2);
      for (var p = 1; p < half; p++) {
          if (!sieve[p]) primes.push(2*p+1);
      }
  }
  return primes;
}

function sumPrimes(num) {
return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);
}


sumPrimes(10);