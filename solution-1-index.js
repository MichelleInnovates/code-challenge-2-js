// Function to swap the case of each character in a string
function swapCase(str) { // Split the string into an array of characters and map over each character
  return str.split('').map(char => { // Split the string into an array of characters and map over each character
      if (char === char.toUpperCase()) { // Check if the character is uppercase
          return char.toLowerCase(); // If uppercase, convert to lowercase
      } else if (char === char.toLowerCase()) { // Check if the character is lowercase
          return char.toUpperCase(); // If lowercase, convert to uppercase
      } else {
          return char; // Return the character unchanged if it's not a letter
      }
  }).join(''); // Join the array of characters back into a string
}

const inputString = 'The Quick Brown Fox'; // Input string
const swappedString = swapCase(inputString); // Call the swapCase function with the input string
console.log(swappedString); // Output the swapped string
// Output: 'tHE qUICK bROWN fOX' - Each character's case has been swapped
