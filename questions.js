// Question 1
function findPair(numbers, target) {
  // Your code here
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
  console.log(findPair([1, 2, 3, 4], 5)); // Output: [1, 4]
}




// Question 2

let string = "hello"


function reverseString(string){
    return string.split("").reverse().join("")

}
console.log(reverseString(string)) //output: "olleh"here





// Question 3
function sumLargest(numbers) {
    
  const sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumLargest(([1,2,3,4]))) // output: 7





// Question 4
let longeststring = ["hi", "hello", "hey", "howdy"]

function filterStrings(longeststring){
    return longeststring.filter((element)=>element.length>3)
}
console.log(filterStrings(longeststring)) //output: ["hello", "howdy"]






// Question 5
function filterEven(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
}

console.log(filterEven([1, 2,3,4,5,6])) // output: [2, 4, 6]





// Question 6

function pluck(objects, key) {
  const values = objects.map(object => object[key]);
  return values;
}
const values =[
  {name: "John", age: 30}, 
  {name: "Jane", age: 25} 
] 
const objvalu = pluck(values, 'name');
console.log(values) //["John", "Jane"]






// Question 7
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome("aousaffasuoa"))
console.log(isPalindrome("aousaf")) //output: true  //output: false





// Question 8

function mostFrequent(str) {
  const frequency = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  
  let maxChar = null;
  let maxCount = -1;
  for (const char in frequency) {
    if (frequency[char] > maxCount) {
      maxChar = char;
      maxCount = frequency[char];
    }
  }
  return maxChar;
}
console.log(mostFrequent("hello world")) //output: "l"





// Question 9
function stringLengths(arr) {
  const lengths = [];
  for (let i = 0; i < arr.length; i++) {
    const length = arr[i].length;
    lengths.push(length);
  }

  return lengths;
}
console.log(stringLengths(["hi", "hello", "hey", "howdy"])) // output: [2, 5, 3, 5]





// Question 10

function firstGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }

  return -1;
}

console.log(firstGreater([1, 5, 15, 20])) // output: 2
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
