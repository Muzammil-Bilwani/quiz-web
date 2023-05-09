// Question 7
function isPalindrome(str) {
    // Your code here
    const reverse = str.split("").reverse().join("");
    return str === reverse ? true : false;
  }

