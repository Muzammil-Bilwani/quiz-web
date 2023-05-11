function pair_num(arr_num, target_num) {
    for (let i = 0; i <= arr_num.length; i++) {
        for (let j = 0; j <= arr_num.length; i++) {
            if (arr_num[i] + arr_num[j] == target_num) {
                return [arr_num[i], arr_num[j]]
            }
        }
    }
}

console.log(pair_num([1, 2, 3, 4], 5))