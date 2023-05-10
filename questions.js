// Question 1
function findPair(numbers, target) {
  // Your code here
}

// Question 2
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Question 3
function sumLargest(numbers) {
  // Your code here
}

// Question 4
function filterStrings(strings) {
  return strings.filter(str => str.length > 3);
 
  /* results = []
   for(i=0; i< strings.length; i++){
   if(strings[i].length > 3 ){
     results.push(strings[i])
   }
   }
   return results;*/
}

// Question 5
function filterEven(numbers) {
  return numbers.filter(ㅤ => ㅤ %2 === 0);
}

// Question 6
function pluck(objects, key) {
  return arrofobjs.map(object => object[key]) 
}

// Question 7
function isPalindrome(str) {
  // Your code here
}

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(strings) {
  let lengthOfStr = []
 
  for(i=0; i< strings.length; i++)
  
  lengthOfStr.push(strings[i].length)
  return lengthOfStr 
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
  firstGreater
}
