// Question 1
function findPair(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}

// Question 2
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

// Question 3
function sumLargest(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

// Question 4
function filterStrings(strings) {
  return strings.filter(str => str.length > 3);
}

// Question 5
function filterEven(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Question 6
function pluck(objects, key) {
  return objects.map(obj => obj[key]);
}

// Question 7
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Question 8
function mostFrequent(str) {
  const charCount = {};
  let maxCount = 0;
  let mostFrequentChar = '';

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
}

// Question 9
function stringLengths(strings) {
  return strings.map(str => str.length);
}

// Question 10
function firstGreater(numbers) {
  return numbers.findIndex(num => num >= 10);
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
