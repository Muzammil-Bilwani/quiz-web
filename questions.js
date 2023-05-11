// Question 1
function findPair(numbers, target) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

// Question 2
function reverseString(str) {
  // Your code here
  let output = str.split("").reverse().join("");
  return output;
}

// Question 3
function sumLargest(numbers) {
  // Your code here
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

// Question 4
function filterStrings(strings) {
  // Your code here
  let filter = strings.filter(strings => strings.length > 3);
  return filter;
}

// Question 5
function filterEven(numbers) {
  // Your code here
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    const filterNumbers = numbers[i];
    if (filterNumbers % 2 === 0) {
      output.push(filterNumbers);
    }
  }
  return output;
}

// Question 6
function pluck(objects, key) {
  // Your code here
  const result = [];
  for (let i = 0; i < objects.length; i++) {
    result.push(objects[i][key]);
  }
  return result;
}

// Question 7
function isPalindrome(str) {
  // Your code here
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Question 8
function mostFrequent(str) {
  // Your code here
  let i, j, count, frequency = 1, char;

  for (i = 0; i < str.length - 1; i++) {
    count = 1;
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > frequency) {
      frequency = count
      char = str[i]
    }
  }
  return char;
}

// Question 9
function stringLengths(strings) {
  // Your code here
  const output = [];
  for (let i = 0; i < strings.length; i++) {
    const Result = strings[i].length;
    output.push(Result);

  }
  return output;
}

// Question 10
function firstGreater(numbers) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
      return i;
    }
  }
  return -1;
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
  firstGreater
}