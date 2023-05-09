

/*---------***** Question NO 1****--------*/
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
console.log("This is Array Pair:  "+findPair([1, 2, 3, 4], 5)); // Output: [1, 4]

/*---------***** Question NO 02****--------*/

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("The reversed Word is:  "+reverseString("hello")); // Output: "olleh"

/*---------***** Question NO 03****--------*/

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
console.log(" The sum of Two Largest Array Number is :  "+sumLargest([1, 2, 3, 4])); // Output: 7

/*---------***** Question NO 04****--------*/

function filterStrings(strings) {
  const filtered = strings.filter((str) => str.length > 3);
  return filtered;
}
console.log("This is the Total Length of an Array:  "+filterStrings(["hi", "hello", "hey", "howdy"])); // Output: ["hello", "howdy"]

/*---------***** Question NO 05****--------*/

function filterEven(numbers) {
  const filtered = numbers.filter((num) => num % 2 === 0);
  return filtered;
}
console.log("This is the Array of an Even Numbers:  "+filterEven([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

/*---------***** Question NO 6****--------*/

function pluck(objects, key) {
  const values = objects.map((obj) => obj[key]);
  return values;
}
console.log(" The object that contains only the values of the specified key from each object in the array:   "+
  pluck(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ],
    "name"
  )
); // Output: ["John", "Jane"]

/*---------***** Question NO 07****--------*/

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("hello")); // false

/*---------***** Question NO 8****--------*/

function mostFrequent(str) {
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

/*---------***** Question NO 9****--------*/
function stringLengths(arr) {
  const lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  console.log(lengths);
}
const arr = ["hi", "hello", "hey", "howdy"];
const lengths = stringLengths(arr); // will return this [2, 5, 3, 5]

/*---------***** Question NO 10****--------*/
function firstGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }
  return -1; // it will return -1 if no number is greater than or equal to 10
}
const greatNum = [1, 5, 15, 8, 12];
const index = firstGreater(greatNum); // returns 2
console.log(index);


                      /*--- I take some helps  from Youtube and Stack OverFlow Website to Understand the Logics----*/

                          /*-------______-------_______******End*****_______----------*/