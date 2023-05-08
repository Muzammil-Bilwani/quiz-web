## JS Assignment

### Instructions

1. Fork this repository to your own account by clicking the "Fork" button in the top right.
2. Clone the repository to your local machine. Using the command line, navigate to the directory you want to clone the repository into and run the following command:

```
git clone URL
```

3. Create a new branch for your work. Using the command line, navigate to the repository directory and run the following command:

```
git checkout -b BRANCH_NAME
```

4. Complete the assignment and commit your work. Using the command line, navigate to the repository directory and run the following commands:

```
git add .
git commit -m "COMMIT MESSAGE"
```

5. Push your changes to your forked repository. Using the command line, navigate to the repository directory and run the following command:

```
git push origin BRANCH_NAME
```

6. Create a pull request to submit your work. Navigate to your forked repository in the browser and click the "New pull request" button. Fill out the pull request form and click "Create pull request".

### Setup

1. Run `npm install` to install dependencies.
2. Run `npm test` to run the tests. The tests will run automatically every time you save a file.

### Assignment

1. Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

   Example input: findPair([1, 2, 3, 4], 5)
   Example output: [1, 4]

2. Write a function that takes a string as input and returns the reverse of the string.

   Example input: reverseString("hello")
   Example output: "olleh"

3. Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

   Example input: sumLargest([1, 2, 3, 4])
   Example output: 7

4. Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

   Example input: filterStrings(["hi", "hello", "hey", "howdy"])
   Example output: ["hello", "howdy"]

5. Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

   Example input: filterEven([1, 2, 3, 4, 5, 6])
   Example output: [2, 4, 6]

6. Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.

   Example input: pluck([{name: "John", age: 30}, {name: "Jane", age: 25}], "name")
   Example output: ["John", "Jane"]

7. Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

   Example input: isPalindrome("racecar")
   Example output: true

8. Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.

   Example input: mostFrequent("hello world")
   Example output: "l"

9. Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

   Example input: stringLengths(["hi", "hello", "hey", "howdy"])
   Example output: [2, 5, 3, 5]

10. Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

    Example input: firstGreater([1, 5, 15, 20])
    Example output: 2
