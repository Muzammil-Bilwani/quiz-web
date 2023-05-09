//1:Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

// Example input: findPair([1, 2, 3, 4], 5) Example output: [1, 4]

let array = ([1, 2, 3, 4], 5);
function findPair(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let pair = array[i] + array[j];
            if (pair == target) {
                return [array[i], array[j]];
            }
        }
    }
}

let output = findPair([1, 2, 3, 4], 5);
console.log(output);