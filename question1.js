// Question 1
function findPair(numbers, target) {
    // Your code here
    for (const i of numbers) {
      for (const j of numbers) {
        if (i + j === target) {
          return [i, j];
        }
      }
    }
    return null;
  }

  