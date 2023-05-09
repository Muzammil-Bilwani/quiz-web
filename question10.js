function firstGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 10) {
        return i;
      }
    }
    return -1; // If no number is greater than or equal to 10
  }