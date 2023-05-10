// Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

// Example input: firstGreater([1, 5, 15, 20]) Example output: 2

const array = [1, 5, 15, 20];

function firstGreater(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            return i;
        }
    }
    return -1;
}

let output = firstGreater(array);
console.log(output);
