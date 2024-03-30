// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 1 and numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers
  if (num % 2 === 0 || num % 3 === 0) return false; // Even numbers and multiples of 3 are not prime

  // Check for prime numbers 
  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false; // Check divisibility by numbers of the form 6k ± 1
  }
  return true; // If no divisors found, the number is prime
}

// Function to filter prime numbers from an array
function findPrimes(inputArray) {
  return inputArray.filter(isPrime); // Filter the input array to find prime numbers using the isPrime function
}

// Example usage
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArray = findPrimes(inputArray); // Find prime numbers in the input array
console.log(resultArray);
// Output: [2, 3, 5, 7] 
