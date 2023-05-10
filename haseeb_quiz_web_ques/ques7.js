// Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

// Example input: isPalindrome("racecar") Example output: true

let uniqueName = "racecar";

function isPalindrome(uniqueName) {
    let rev = uniqueName.split("").reverse().join("");
    if(uniqueName==rev){
        return true;
    }else{
        return false;
    }
    
}

console.log(isPalindrome("racecar"));