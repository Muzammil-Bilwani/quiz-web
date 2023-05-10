// Question 1
function findPair(numbers, target) {
  // Your code here
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


// Question 2
function reverseString(str) {
  // Your code here
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"


// Question 3
function sumLargest(numbers) {
  // Your code here
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
console.log(sumLargest([1, 2, 3, 4])); // Output: 7

// Question 4
function filterStrings(strings) {
  // Your code here
  const filtered = strings.filter((str) => str.length > 3);
  return filtered;
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"])); // Output: ["hello", "howdy"]


// Question 5
function filterEven(numbers) {
  // Your code here
  const filtered = numbers.filter((num) => num % 2 === 0);
  return filtered;
}
console.log(filterEven([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Question 6
function pluck(objects, key) {
  // Your code here
  const values = objects.map((obj) => obj[key]);
  return values;
}
console.log( pluck(
  [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ],
  "name"
)
); // Output: ["John", "Jane"]

// Question 7
function isPalindrome(str) {
  // Your code here
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("mesem")); // true
console.log(isPalindrome("hello")); // false

// Question 8
function mostFrequent(str) {
  // Your code here
   //  i have created a empty character frequencies
   const freq = {};

   // this loop define character in string to check condition
   for (let i = 0; i < str.length; i++) {
     const char = str[i];
 
     // If the character is not in the frequency object, add it
     if (!freq[char]) {
       freq[char] = 1;
     } else {
       // If the character is already in the frequency object, increment its count
       freq[char]++;
     }
   }
 
   // this logic find the most frequent value of arrays
   let mostFreqChar = null;
   let highestFreq = 0;
   for (const char in freq) {
     if (freq[char] > highestFreq) {
       mostFreqChar = char;
       highestFreq = freq[char];
     }
   }
 
   return mostFreqChar;
  
}
console.log(mostFrequent("hello world")); //  this is Output: "l"



// Question 9
function stringLengths(strings) {
  // Your code here
  const lengths = [];
  for (let i = 0; i < strings.length; i++) {
    lengths.push(strings[i].length);
  }
  console.log(lengths);
}
const strings = ["hi", "hello", "hey", "howdy"];
const lengths = stringLengths(strings); // will return this [2, 5, 3, 5]

// Question 10
function firstGreater(numbers) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
      return i;
    }
  }
  return -1; // it will return -1 if no number is greater than or equal to 10
}
const greatNum = [1, 5, 15, 8, 12];
const index = firstGreater(greatNum); // returns 2
console.log(index);

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
