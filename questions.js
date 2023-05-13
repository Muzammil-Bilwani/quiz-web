// Question 1
function findPair(numbers, target) {
  let i = 0;
  for (let i = 0; i < num.length - 1; i++) {
    let j = 0;
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [num[i], num[j]];
      }
    }
  }
  return null;
}

let num = [1, 2, 3, 4];
let target = 5;
let pair = findPair(num, target);
console.log(pair);

// Question 2
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
console.log( reverseString('bano qabil'))


// Question 3
function sumLargest(numbers) {
  let largest1 = 0;
  let largest2 = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest1) {
      largest2 = largest1;
      largest1 = numbers[i];
    } else if (numbers[i] > largest2) {
      largest2 = numbers[i];
    }
  }
  
  return largest1 + largest2;
}

const number =[1, 2, 3, 4];
console.log(sumLargest(number));


// Question 4
function filterStrings(strings) {
  let newstr = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 3) newstr.push(strings[i]);
  }
  return newstr;
}
const strings = ["hi", "hello", "hey", "howdy"];
console.log(filterStrings(strings));

// Question 5
function filterEven(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}
const arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEven(arr);
console.log(evenNumbers);

// Question 6
function plucks(object, key) {
  let arrayofobjects = [];

  for (let i = 0; i < object.length; ++i) {
    arrayofobjects.push(object[i][key]);
  }
  return arrayofobjects;
}

let object = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

let result = plucks(object, "name");
console.log(result);

// Question 7
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(array) {
  let lengths = [];
  for (let i = 0; i < array.length; i++) {
    lengths.push(array[i].length);
  }
  return lengths;
}

let array = ["hi", "hello", "hey", "howdy"];
let lengths = stringLengths(array);
console.log(lengths);

// Question 10
function firstGreater(numbers) {
  let i;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
      return i;
    }
  }
}
var numbers = [1, 5, 15, 20];
var index = firstGreater(numbers);
console.log(index);

module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  plucks,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater,
};
