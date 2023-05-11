function sumLargest(arr_num) {
    let temp = 0;

    for (let i = 0; i <= arr_num.length; i++) {
        for (let j = i + 1; j < arr_num.length; j++) {
            if (arr_num[i] + arr_num[j] > temp) {
                temp = arr_num[i] + arr_num[j]
            }


        }
    }
    return temp
}
console.log(sumLargest([1, 2, 3, 4]))