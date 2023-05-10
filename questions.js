// Question 1
function findPair(numbers, target) {
  // Your code here
  let sumOfPair = [];
  for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        sumOfPair.push(numbers[i], numbers[j]);
        return sumOfPair;
      }
    }
  }
  return null;
}

// Question 2
function reverseString(str) {
  // Your code here
  let ansStr = "";
  for (let x = str.length -1; x >= 0; x--){
    ansStr += str[x];
  }
  return ansStr;
}

// Question 3
function sumLargest(numbers) {
  // Your code here
}

// Question 4
function filterStrings(strings) {
  // Your code here
  let filter = [];
  for (let i = 0; i < strings.length; i++){
    for (let j = i +1; j < strings.length; j++){
      if (strings[j] > 3){
        filter.push(strings[i]);
      }
    }
  }
  return filter;
}

// Question 5
function filterEven(numbers) {
  // Your code here
  let onlyEvens = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
      onlyEvens.push(numbers[i]);
    }
  }
  return onlyEvens;
}

// Question 6
function pluck(objects, key) {
  // Your code here
  let specificKey = [];
  for (let i = 0; i < objects.length; i++){
    specificKey.push(objects[i][key]);
  }
  return specificKey;
}

// Question 7
function isPalindrome(str) {
  // Your code here 
  let checkPalindrome = "";
  for (let i = str.length -1; i >= 0; i--){
    checkPalindrome += str[i];
    if(str[i] === checkPalindrome){
      return true;
    }
    else{
      return false;
    }
  }
}

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(strings) {
  // Your code here
  let checkLengths = [];
  for (let i = 0; i < strings.length; i++){
    checkLengths.push(strings[i].length);
  }
  return checkLengths;
}

// Question 10
function firstGreater(numbers) {
  // Your code here
  for (let x = 0; x < numbers.length; x++){
    if (numbers[x] >= 10){
      return x;
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
