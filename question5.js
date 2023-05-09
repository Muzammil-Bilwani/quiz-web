// Question 5
function filterEven(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  