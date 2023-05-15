// Question 1
function findPair(numbers, target) {
  // Your code here
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = 0; j <= numbers.length; j++) {
        if (numbers[i] + numbers[j] === target)
            return [numbers[i], numbers[j]]
    }  
}
}
console.log(findPair([1, 2, 3, 4], 5))

// Question 2
function reverseString(str) {
  // Your code here
  let newstring = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newstring = newstring + str[i]
    }
    return newstring
}
console.log(reverseString("Hello"))

// Question 3
function sumLargest(numbers) {
  // Your code here
  numbers.sort(function (a, b) {
    return a - b
  })
  numbers.reverse()
  return numbers[0] + numbers[1]
}
console.log(sumLargest([1, 2, 3, 4]))

// Question 4
function filterStrings(strings) {
  // Your code here
  let filter = strings.filter(function (ArrayElements) {
    let newarray = []
    if (ArrayElements.length > 3) {
        newarray.push(ArrayElements)
        return newarray
    }
})
return filter
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"]))

// Question 5
function filterEven(numbers) {
  // Your code here
  let newarray = []
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          newarray.push(numbers[i])
      }
  }
  return newarray
}
console.log(filterEven([1, 2, 3, 4, 5, 6]))

// Question 6
function pluck(objects, key) {
  // Your code here
  let NewArray = []
  for (let i = 0; i < objects.length; i++) {
      NewArray.push(objects[i][key])
  }
  return NewArray
}
console.log(pluck([{ name: "John", age: 30 }, { name: "Jane", age: 25 }], "name"))

// Question 7
function isPalindrome(str) {
  // Your code here
  let newstring = ""
  for (let i = str.length - 1; i >= 0; i--) {
      newstring = newstring + str[i]
  }
  if (newstring == str) {
      return true
  }
  else {
      return false
  }
}
console.log(isPalindrome("racecar"))

// Question 8
function mostFrequent(str) {
  // Your code here
  const map = {};
    str.split("").forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1
    })
    let max = 1
    let char = str[0]
    for (let k in map) {
        if (map[k] > max) {
            max = map[k]
            char = k
        }
    }
    return char
}
console.log(mostFrequent("hello world"))

// Question 9
function stringLengths(strings) {
  // Your code here
  let newarray = []
    for (let i = 0; i < strings.length; i++) {
        const l = strings[i].length
        newarray.push(l)
    }
    return newarray
}
console.log(stringLengths(["hi", "hello", "hey", "howdy"]))

// Question 10
function firstGreater(numbers) {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10)
        return i
}
}
console.log(firstGreater([1, 5, 15, 20]))

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
