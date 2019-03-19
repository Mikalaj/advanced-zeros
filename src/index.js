module.exports = function getZerosCount(number, base) {
  let primes = eratosfen(base);
  let multiprimes = getMultiPrimes(base, primes);
  let multiPrimesPower = getMiltiPrimePower(multiprimes);
  let zeroCount;
  for (const pair of multiPrimesPower.entries()) {
    if (zeroCount === undefined) {
      zeroCount = Math.floor(powerOf(pair[0], number) / pair[1])
    } else {
      zeroCount = Math.min(zeroCount, Math.floor(powerOf(pair[0], number) / pair[1]))
    }
  }

  return zeroCount;
}

function getMultiPrimes(n, primes) {
  let multiprimes = [];
  while (n !== 1) {
    primes.forEach(function(prime) {
      if (prime > n) {
        return true;
      }
      if (n % prime === 0) {
        multiprimes.push(prime);
        n = n / prime;
        return true;
      }
    });
  }

  return multiprimes;
}

function getMiltiPrimePower(multiprimes) {
  multiprimes = multiprimes.sort();
  let multiPrimesPower = new Map();
  let currentPrime = multiprimes[0];
  let primePower = 0;
  
  for (let index = 0; index < multiprimes.length; index++) {
    if (multiprimes[index] !== currentPrime) {
      multiPrimesPower.set(currentPrime, primePower);
      currentPrime = multiprimes[index];
      primePower = 1;
    } else {
      primePower++;
    }
  }
  multiPrimesPower.set(currentPrime, primePower);

  return multiPrimesPower;
}

function powerOf(a, n) {
  let power = 0;
  let powerA = a;
  while (n / powerA > 1) {
    power += Math.floor(n / powerA);
    powerA *= a;
  }

  return power;
}

function eratosfen(n) {
  let sieve = Array(n + 1).fill(true);
  for (let index = 2; index <= Math.sqrt(n) + 1; index++) {
    if (sieve[index] === true) {
      for (let j = index * index; j < n; j += index) {
        sieve[j] = false;
      }
    }
  }

  let primes = [];
  for (let index = 2; index <= n; index++){
    if (sieve[index]) {
      primes.push(index);
    }
  }

  return primes;
}