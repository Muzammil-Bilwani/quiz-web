// 3 : Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// Example input: sumLargest([1, 2, 3, 4]) Example output: 7

let arrSum = ([1, 2, 3, 4]);

function sumLargest(arrSum) {
    let sum = 0;
    for (let i = 2; i < arrSum.length; i++)
        sum += arrSum[i];

    return sum;
}

let output = sumLargest([1, 2, 3, 4]);
console.log(output);