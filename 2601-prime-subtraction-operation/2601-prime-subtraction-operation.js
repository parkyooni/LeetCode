const generatePrimes = (limit) => {
  const sieve = Array(limit + 1).fill(true);
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
        
      for (let j = i * 2; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
    
  return primes;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const primeSubOperation = (nums) => {
  if (!Array.isArray(nums) || nums.length === 0) return false;

  const primes = generatePrimes(1000); 

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) continue;

    const difference = nums[i] - nums[i + 1];
    const prime = primes.find((p) => p > difference); 

    if (!prime) return false; 

    nums[i] -= prime; 
    if (nums[i] <= 0) return false; 
  }
    
  return true;
};
