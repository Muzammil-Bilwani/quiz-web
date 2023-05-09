// Question 3
function sumLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
      return b - a;
    });
    // Return the sum of the two largest numbers
    return arr[0] + arr[1];
  }
  