// Write a function that takes a string as input and returns the reverse of the string.

// Example input: reverseString("hello") Example output: "olleh"

let StringName = "Karachi The city of light";

function reverseString(StringName) {
    let reverse = "";
    for (let i = StringName.length - 1; i >= 0; i--) {
        reverse += StringName.charAt(i);
    }
    return reverse;
}

let output = reverseString("Karachi The city of light");
console.log(output);