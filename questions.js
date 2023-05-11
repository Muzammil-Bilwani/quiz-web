// Question 1
let arr_numbers_1 = [1, 2, 3, 4];
let target = 7;

const findPair = (arr_numbers_1, target) => {
  for (let i = 0; i < arr_numbers_1.length; i++) {
    for (let j = i + 1; j < arr_numbers_1.length; j++) {
      if (arr_numbers_1[i] + arr_numbers_1[j] === target) {
        return [arr_numbers_1[i], arr_numbers_1[j]];
      }
    }
  }
};

console.log(findPair(arr_numbers_1, target));
// Question 2
let str_2 = "hello";

const reverseString = (str_2) => {
  return str_2.split("").reverse().join("");
};
console.log(reverseString(str_2));

// Question 3
let arr_numbers_3 = [1, 2, 3, 4];
let highest = -Infinity;
let secondHighest = -Infinity;
const sumLargest = (arr_numbers_3) => {
  for (let i = 0; i < arr_numbers_3.length; i++) {
    if (arr_numbers_3[i] > highest) {
      secondHighest = highest;
      highest = arr_numbers_3[i];
    }
  }
  return highest + secondHighest;
};
console.log(sumLargest(arr_numbers_3));

// Another Approach:

const sumLargest1 = (arr_numbers_3) => {
  arr_numbers_3.sort();
  return (
    arr_numbers_3[arr_numbers_3.length - 2] +
    arr_numbers_3[arr_numbers_3.length - 1]
  );
};
console.log(sumLargest1(arr_numbers_3));

// Question 4

let arr_str_4 = ["hi", "hello", "hey", "howdy"];
const filterStrings = (arr_str_4) => {
  return arr_str_4.filter((string) => {
    if (string.length > 3) {
      return string;
    }
  });
};
console.log(filterStrings(arr_str_4));
// Question 5
let arr_numbers_5 = [1, 2, 3, 4, 5, 6];
const filterEven = (arr_numbers_5) => {
  return arr_numbers_5.filter((number) => {
    if (number % 2 === 0) {
      return number;
    }
  });
};

console.log(filterEven(arr_numbers_5));

// Question 6
let arr_obj_6 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

const pluck = (arr_obj_6, key) => {
  return arr_obj_6.map((object) => object[key]);
};
console.log(pluck(arr_obj_6, "name"));

// Question 7
let string_7 = "racecar";
const isPalindrome = (string_7) => {
  return string_7.split("").reverse().join("") === string_7 ? true : false;
};
console.log(isPalindrome(string_7));

// Question 8
let string_8 = "hello world";
let str_obj_8 = {};
let maxKey = "";
const mostFrequent = (string_8) => {
  string_8 = string_8.toLowerCase();
  for (let i = 0; i < string_8.length; i++) {
    let key = string_8[i];
    if (!str_obj_8[key]) {
      str_obj_8[key] = 0;
    }
    str_obj_8[key]++;
    if (maxKey == "" || str_obj_8[key] > str_obj_8[maxKey]) {
      maxKey = key;
    }
  }

  return maxKey;
};
console.log(mostFrequent(string_8));

// Question 9
let arr_str_9 = ["hi", "hello", "hey", "howdy"];
const stringLengths = (arr_str_9) => {
  return arr_str_9.map((string) => string.length);
};
console.log(stringLengths(arr_str_9));

// Question 10
let arr_numbers_10 = [1, 5, 15, 20];
const firstGreater = (arr_numbers_10) => {
  for (let i = 0; i < arr_numbers_10.length; i++) {
    let key = arr_numbers_10[i];
    if (key >= 10) {
      return arr_numbers_10.indexOf(key);
    }
  }
};
console.log(firstGreater(arr_numbers_10));
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
