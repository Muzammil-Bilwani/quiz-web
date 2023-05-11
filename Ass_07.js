function isPalindrome(str) {
    let newstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return str == newstr;
}
console.log(isPalindrome("level"))