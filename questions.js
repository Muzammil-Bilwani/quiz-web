// Question 1
function findPair(Numbers, target) {
  // Your code here
  for (let i = 0; i < Numbers.length; i++) {
    for (let j = i + 1; j < Numbers.length; j++) {
      if (Numbers[i] + Numbers[j] === target) {
        return [Numbers[i], Numbers[j]];
      }
    }
  }
  return null;
}

// Example usage:
let Numbers = [1, 2, 3, 4];
let target = 5;
let result = findPair(Numbers, target);
console.log(result); // [1, 4]

// Question 2
function reverseString(str) {
  // Your code here
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Question 3
function sumLargest(numbers) {
  // Your code here
  let largest = numbers[0];
  let secondLargest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
  return largest + secondLargest;
}

// Example usage:
const number = [1, 2, 3, 4, 5];
console.log(sumLargest(numbers)); // Output: 9

// Question 4
function filterStrings(strings) {
  // Your code here
  return strings.filter((str) => str.length > 3);
}

console.log(filterStrings(["hi", "hello", "hey", "howdy"]));

// Question 5
function filterEven(numbers) {
  // Your code here
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}
let myNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEven(myNumbers);
console.log(evenNumbers); // [2, 4, 6]

// Question 6
function pluck(objects, key) {
  // Your code here
  return objects.map(function (obj) {
    return obj[key];
  });
}
var objects = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];

var names = pluck(objects, "name");
console.log(names); // Output: ['John', 'Jane', 'Bob']

// Question 7
function isPalindrome(str) {
  // Your code here
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// Question 8
function mostFrequent(str) {
  // Your code here
  let charMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(mostFrequent("hello world")); // l
console.log(mostFrequent("abracadabra")); // a

// Question 9
function stringLengths(strings) {
  // Your code here
  return strings.map((str) => str.length);
}
const strings = ["hi", "hello", "hey", "howdy"];
const lengths = stringLengths(strings);
console.log(lengths); // [2, 5, 3, 5]

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

// Example usage:
const numbers = [1, 5, 15, 20];
console.log(firstGreater(numbers)); // Output: 2

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
