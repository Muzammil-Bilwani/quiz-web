function filterStrings(arr) {
    const reqArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            reqArray.push(arr[i]);
        }
    }
    return reqArray;
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"]))