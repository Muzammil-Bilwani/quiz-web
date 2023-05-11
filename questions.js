// Question 1

let array = [1, 2, 3, 4]
let target = 7
function findPair(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]]
      }
    }
  } return null
}
console.log(findPair(array, target));

// Question 2

let str = "Assignment"
function reverseString(str) {
  let reversestrng1 = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversestrng1 += str[i]
  } return reversestrng1

}
console.log(reverseString(str))


// Question 3
const numbers = [5, 7, 3, 9, 8]
function sumLargest(numbers) {
  const sortedArray = numbers.sort(function (a, b) {
    return a - b
  })
  const sum = sortedArray[numbers.length - 1] + sortedArray[numbers.length - 2]
  return sum
}
console.log(sumLargest(numbers))


// Question 4
let strings = ["yes", "ashar", "yaqoob"]
function filterStrings(strings) {
  return strings.filter(function (element) {
    if (element.length > 3)
      return element

  })
}
console.log(filterStrings(strings))


// Question 5
let arr0 = [1, 2, 3, 4, 5, 6]
function filterEven(arr0) {
  let evennumbers = []
  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i] % 2 === 0) {
      evennumbers.push(arr0[i])
    }
  } return evennumbers
}
console.log(filterEven(arr0))


// Question 6
let objects = [{
  name: "hasnain",
  age: 29,
  profession: "MERN stack developer"
},
{
  name: "farhad",
  age: 24,
  profession: "chemical engineer"
},
{
  name: "kashan",
  age: 25,
  profession: "doctor"
}]
function pluck(objects, key) {
  return objects.map(function (element) {
    return element[key]
  })
}
console.log(pluck(objects, "age"))


// Question 7

let str2 = "deified"
function isPalindrome(str2) {
  let reversestrng2 = ""
  for (let i = str2.length - 1; i >= 0; i--) {
    reversestrng2 += str2[i]
  }
  let result = reversestrng2 === str2 ? true : false
  return result
}
console.log(isPalindrome(str2))

// 8. Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.
// Question 8
let stg = "anonymous"
function mostFrequent(stg) {
  for (let i = 0; i < stg.length; i++) {
    for (let j = 1; j < stg.length; j++) {
      if (stg[i] == stg[j]) {
        return stg[i]
      }
    }
  } return null
}
console.log(mostFrequent(stg))


// Question 9

let arrstring007 = ['messi', "ronaldo", "benzema"]
function stringLengths(arrstring007) {
  let lenofallstrg = []
  for (let i = 0; i < arrstring007.length; i++) {
    lenofallstrg.push(arrstring007[i].length)
  }
  return lenofallstrg
}
console.log(stringLengths(arrstring007))


// Question 10
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function firstGreater(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= 10) {
      return i;
    }
  } return -1;
}
let result = (firstGreater(ar));
console.log(result)

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

