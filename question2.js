// 1. Write a function that takes a string as input and returns the reverse of the string.
//    Example input: reverseString("hello")
//    Example output: "olleh"

// Question 2

function reverseString(str) {
  // Convert the string to an array of characters, reverse it, and then join the characters back into a string
  return str.split("").reverse().join("");
}


module.exports = reverseString
