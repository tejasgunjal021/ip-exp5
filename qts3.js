function* generatePrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num; 
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true; 
  }
  
  const prompt = require('prompt-sync')();
  const limit = parseInt(prompt('Enter the limit up to which to generate prime numbers: '), 10);
  
  const primeGenerator = generatePrimes(limit);
  
  console.log(`Prime numbers up to ${limit}:`);
  for (const prime of primeGenerator) {
    console.log(prime); 
  }
  
  