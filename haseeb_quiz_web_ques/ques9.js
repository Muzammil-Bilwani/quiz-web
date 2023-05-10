// Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

// Example input: stringLengths(["hi", "hello", "hey", "howdy"]) Example output: [2, 5, 3, 5]
 
let stringArr = ["hi", "hello", "hey", "Howdy"];

function stringLengths(stringArr) {
    let newArr1 = [];
    for(let i = 0; i< stringArr.length; i++){
     newArr1.push(stringArr[i].length);
    }
    return newArr1;
}

let output = stringLengths(stringArr);
console.log(output);