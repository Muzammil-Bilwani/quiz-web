function Index(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            return i;
        }
    }
}
console.log(Index([1, 5, 15, 20]));