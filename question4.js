// 2. Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.
// Example input: filterStrings(["hi", "hello", "hey", "howdy"])
// Example output: ["hello", "howdy"]

// Question 4
function filterStrings(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      result.push(arr[i]);
    }
  }
  return result;
}


module.exports = filterStrings
