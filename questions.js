// Question 1
function findPair(numbers, target) {
  let pair = [];
  let i, j;

  for (i = 0; i < numbers.length - 1; i++) 
  {
    for (j = i + 1; j < numbers.length; j++) 
    {
      if (numbers[i] + numbers[j] == target) {
        pair.push(numbers[i], numbers[j]);
        return pair;
      }
    }
  }
  return null;
}

// Question 2
function reverseString(str) {
  let revString = ""
    for (let i = str.length-1; i >= 0; i--) {
        revString+=str[i] 
    }
    return revString
}

// Question 3
function sumLargest(numbers) {
  let firstMax = findMax(numbers);

  numbers.splice(numbers.indexOf(firstMax), 1);

  let secMax = findMax(numbers);

  function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) 
    {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  return firstMax + secMax;
}

// Question 4
function filterStrings(strings) {
  let newArr = []
  for (let i = 0; i < strings.length; i++) 
  {
    if (strings[i].length > 3) {
      newArr.push(strings.splice(i, 1).toString());
    }
  }
  return newArr;
}

// Question 5
function filterEven(numbers) {
  let evenArr = []
  for (let i = 0; i < numbers.length; i++) 
  {
    if (numbers[i] % 2 == 0) {
      evenArr.push(numbers[i])
    }
  }
  return evenArr;
}

// Question 6
function pluck(objects, key) {
  let newArr = []
  for (let i = 0; i < objects.length; i++) {
    newArr.push(objects[i][key])
  }
  return newArr
}

// Question 7
function isPalindrome(str) {
  let length = str.length, i;

  for (i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] != str[length - 1 - i]) {
      return false;
    }
  }
  if (i == Math.floor(length / 2)) {
    return true;
  }    
}

// Question 8
function mostFrequent(str) {
  let i, j, count, frequency = 1, char;

  for (i = 0; i < str.length - 1; i++) {
    count = 1;
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > frequency) {
      frequency = count
      char = str[i]
    }
  }
  return char;
}

// Question 9
function stringLengths(strings) {
  let lengths = [];
  for (let i = 0; i < strings.length; i++) {
    lengths.push(strings[i].length);
  }
  return lengths;
}

// Question 10
function firstGreater(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
      return i;
    }
  }
  return -1
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
