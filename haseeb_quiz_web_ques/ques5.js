// Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

// Example input: filterEven([1, 2, 3, 4, 5, 6]) Example output: [2, 4, 6]

let inputArr = [1, 2, 3, 4, 5, 6];

function filterEven(inputArr) {
    let newArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 == 0) {
            newArr.push(inputArr[i]);
        }
    }
    return newArr;
}

console.log(filterEven([1, 2, 3, 4, 5, 6]));
