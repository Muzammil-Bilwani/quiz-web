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
  return numbers.filter((e) => {
    return e % 2 === 0;
  });
}

// Question 6
function pluck(objects, key) {
  const result = [];
  for (let i = 0; i < objects.length; i++) {
    result.push(objects[i][key]);
  }
  return result;
}

// Question 7
function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return str === reverse ? true : false;
}

// Question 8
function mostFrequent(str) {
  let frequency = {};
  let maxFrequency = 0;
  let mostFrequentItem;
  for (const item of str) {
    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
    if (frequency[item] > maxFrequency) {
      maxFrequency = frequency[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
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
