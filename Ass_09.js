function strLength(arr) {
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
        newarray.push(arr[i].length);
    }
    return newarray;
}
console.log(strLength(["hi", "hello", "hey", "howdy"]));
