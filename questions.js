// Question 1
function findPair(numbers, target) {
  for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
     let sum=numbers[i]+numbers[j];
     if(sum==target){
      let out=[]
      out.push(numbers[i])
      out.push(numbers[j])
      return out
     }
    }

  }
}
let output1=findPair([1,2,3,4],5)
console.log(output1)

// Question 2
function reverseString(str) {
  let rev_str=str.split('').reverse().join("");
  return rev_str
}
let output2=reverseString("hello")
console.log(output2)

// Question 3
function sumLargest(numbers) {
  let largest_num=0;
  let sec_num=0;
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest_num){
      sec_num=largest_num;
      largest_num=numbers[i];
    }
  }
  let sum =largest_num+sec_num;
  return sum
}
let output3=sumLargest([1,2,3,4,5]);
console.log(output3)

// Question 4
function filterStrings(strings) {
  let new_str=[]
  for(let i=0;i<strings.length;i++){
    if(strings[i].length>3){
      new_str.push(strings[i])
    }
  }
  return new_str
}
let output4=filterStrings(["hi", "hello", "hey", "howdy"]);
console.log(output4);

// Question 5
function filterEven(numbers) {
  let new_num=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      new_num.push(numbers[i])
    }
  }
  return new_num
}
let output5=filterEven([1,2,3,4,5,6])
console.log(output5)

// Question 6
function pluck(objects, key) {
  let new_array=[];
  for(let i=0;i<objects.length;i++){
    let value=objects[i][key]
    new_array.push(value)
  }
  return new_array
}
let output6=pluck([{name:"John", age: 30}, {name: "Jane", age: 25}], "name")
console.log(output6)

// Question 7
function isPalindrome(str) {
  let rev_str=str.split('').reverse().join("")
  if(str===rev_str){
    return true
  }
  else
  return false
}
let output7=isPalindrome("racecar");
console.log(output7)

// Question 8
function mostFrequent(str) {
  let array=str.split('')
  let maxcount=0
  let mostRep=0
  for(let i=0;i<array.length;i++){
    let count=0
    for(let j=0;j<array.length;j++){
      if(array[i]==array[j]){
        count++
      }
    }
     if(count>maxcount){
      maxcount=count
      mostRep=array[i]
    }
    else if(count=maxcount){
      mostRep=array[maxcount]
    }
  }
  
  return mostRep
}
let output8=mostFrequent("hello world")
console.log(output8)

// Question 9
function stringLengths(strings) {
  let new_array=[]
  for(let i=0;i<strings.length;i++){
    let lengths=strings[i].length
    new_array.push(lengths)
  }
  return new_array
}
let output9=stringLengths(["hi", "hello", "hey", "howdy"])
console.log(output9)

// Question 10
function firstGreater(numbers) {
  let num=0;
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>=10){
      num=i
     return num
    }
  }
  if(num<=10){
    return -1
  }

}
let output10=firstGreater([1, 5, 15, 20])
console.log(output10)

module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater
}
