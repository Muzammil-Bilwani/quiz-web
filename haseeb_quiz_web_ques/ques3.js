// 3 : Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// Example input: sumLargest([1, 2, 3, 4]) Example output: 7

let arrSum = ([1, 2, 3, 4]);

function sumLargest(arrSum) {
    arrSum.sort();
    const sum = arrSum[0] + arrSum[3];

    return sum;
}

let output = sumLargest([1,2,3,4]);
console.log(output);