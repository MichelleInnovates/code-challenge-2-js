// Function to generate an array of numbers between two given numbers
function generateArray(start, end) {
  let result = []; // Initialize an empty array to store the generated numbers
  if (start <= end) { // Check if the start number is less than or equal to the end number
      for (let i = start; i <= end; i++) { // Loop from start to end if start is less than or equal to end
          result.push(i); // Add each number to the result array
      }
  } else { // If start is greater than end
      for (let i = start; i >= end; i--) { // Loop from start to end in reverse if start is greater than end
          result.push(i); // Add each number to the result array
      }
  }
  return result; // Return the generated array of numbers
}


console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7] - Numbers between 4 and 7
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7] - Numbers between -4 and 7
