// Question 1
function findPair(numbers, target) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (sum === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}

// Question 2
function reverseString(str) {
  // Your code here
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }
  return reverse;
}

// Question 3
function sumLargest(numbers) {
  // Your code here
  let sum = 0;
  for (let i = 2; i < numbers.length; i++)
    sum += numbers[i];

  return sum;
}

// Question 4
function filterStrings(strings) {
  // Your code here
  let filtered = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 3) {
      filtered.push(strings[i]);
    }
  }
  return filtered;
}

// Question 5
function filterEven(numbers) {
  // Your code here
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}

// Question 6
function pluck(objects, key) {
  // Your code here
  return objects.map(function (objects) {
    return objects[key];
  });
}

// Question 7
function isPalindrome(str) {
  // Your code here
  let rev = str.split("").reverse().join("");
  if (str == rev) {
    return true;
  } else {
    return false;
  }
}

// Question 8
function mostFrequent(str) {
  // Your code here
  let charCount = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}

// Question 9
function stringLengths(strings) {
  // Your code here
  let newArr1 = [];
  for (let i = 0; i < strings.length; i++) {
    newArr1.push(strings[i].length);
  }
  return newArr1;
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
