// Question 1
function findPair(numbers, target) {
 // ONLY 1st & 8th Question remains, I'll soon understand them....
}

// Question 2
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Question 3
function sumLargest(numbers) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  // CHATGPT recommended to use -infinity instead of "0"
  
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    
    
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 + max2;
}

// Question 4
function filterStrings(strings) {
   return strings.filter(str => str.length > 3);
}

// Question 5
function filterEven(numbers) {
  return numbers.filter(ㅤ => ㅤ %2 === 0);
}

// Question 6
function pluck(objects, key) {
  return objects.map(object => object[key]) 
}

// Question 7
function isPalindrome(str) {
  let reversedWord= str.split('').reverse().join('')
  return reversedWord === str;
}

// Question 8
function mostFrequent(str) {
  // WILL LEARN SOON
}

// Question 9
function stringLengths(strings) {
   let lengthOfStr = []
 
  for(i=0; i< strings.length; i++){
  
  lengthOfStr.push(strings[i].length)
}
  return lengthOfStr 
}

// Question 10
function firstGreater(numbers) {
   // I was really confused, but then i remembered counting in JS starts from "0"
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
