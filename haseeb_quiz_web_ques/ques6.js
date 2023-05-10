// Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.

// Example input: pluck([{name: "John", age: 30}, {name: "Jane", age: 25}], "name") Example output: ["John", "Jane"]

function pluck(array, key) {
    return array.map(function (obj) {
        return obj[key];
    });
}
var input = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
var output = pluck(input, "name");
console.log(output);