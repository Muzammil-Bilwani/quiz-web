// Question 8
function mostFrequent(str) {
    const charCount = {};
    let maxCount = 0;
    let maxChar = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }

 