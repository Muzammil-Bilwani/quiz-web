function filterStrings(arr) {
    const reqArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            reqArray[reqArray.length] = arr[i]
        }
    }
    return reqArray;
}
console.log(filterStrings([1, 2, 3, 4, 5, 6]));