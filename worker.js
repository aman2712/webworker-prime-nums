function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function calculatePrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

onmessage = (e) => {
  const startTime = Date.now();
  const primes = calculatePrimes(e.data);
  const endTime = Date.now();
  postMessage({ duration: (endTime - startTime) / 1000, primes });
};
