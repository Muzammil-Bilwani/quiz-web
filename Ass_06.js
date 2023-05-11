function input(arr, key) {
    const valuesArray = [];
    for (let i = 0; i < arr.length; i++) {
        valuesArray.push(arr[i]);
    }
    return valuesArray;
}
console.log(input([{ name: "John", age: 30 }, { name: "Jane", age: 25 }], "name"));