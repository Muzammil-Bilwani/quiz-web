// Question 6
function pluck(arr, key) {
    const values = [];
    for (let i = 0; i < arr.length; i++) {
      values.push(arr[i][key]);
    }
    return values;
  }
  