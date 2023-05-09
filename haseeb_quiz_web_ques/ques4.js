// Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

// Example input: filterStrings(["hi", "hello", "hey", "howdy"]) Example output: ["hello", "howdy"]

let arrFilter = ["hi", "hello", "hey", "howdy"];

function filterStrings(arrFilter) {
    let filtered = [];
    for (let i = 0; i < arrFilter.length; i++) {
        if (arrFilter[i].length > 3) {
            filtered.push(arrFilter[i]);
        }
    }
    return filtered;
}

let output = filterStrings(["hi", "hello", "hey", "howdy"]);
console.log(output);