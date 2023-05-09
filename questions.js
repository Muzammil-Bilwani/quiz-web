// Question 1
function findPair(numbers, target) {
  for (const i of numbers) {
    for (const j of numbers) {
      if (i + j === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// Question 2
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Question 3
function sumLargest(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

// Question 4
function filterStrings(strings) {
  return strings.filter((e) => {
    return e.length > 3;
  });
}

// Question 5
function filterEven(numbers) {
  // Your code here
}

// Question 6
function pluck(objects, key) {
  // Your code here
}

// Question 7
function isPalindrome(str) {
  // Your code here
}

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(strings) {
  // Your code here
}

// Question 10
function firstGreater(numbers) {
  // Your code here
}
module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater,
};
