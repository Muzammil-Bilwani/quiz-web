// Question 1
function findPair(numbers, target) {
   let n1=0;
   let n2=0;
   let sum=0;
   for(var i=0; i<numbers.length; i++){
    for(var j=0; j<numbers.length; j++){
      
    
    if(numbers[i]+numbers[j]==target)
    sum=target;

    }
   }
   if(sum==target)
   return true
   else
   return false
}

console.log(findPair([1,2,3,4],5))

// Question 2
function reverseString(str) {
  let newstr=""
  for(var i=str.length-1; i>=0; i--){
    newstr+=str[i]
  }
  return newstr
}
console.log(reverseString("hello"))

// Question 3
function sumLargest(numbers) {
  let num1=0
               let num2=0
               let sum=0
                for(let i=0; i<numbers.length; i++){
                  
                    for(let j=0; j<numbers.length; j++){
                        if(sum<=numbers[i]+numbers[j]){
                        sum=numbers[i]+numbers[j]
                        num1=numbers[i]
                        num2=numbers[j]
                       

                        }
                        
                    }

                }
                return {num1,num2,sum}
             }
                        console.log(sumLargest([1,2,3,4]))




// Question 4
function filterStrings(strings) {

  var arrofstr=[]
  for(var i=0;i<strings.length; i++){
    if(strings[i].length>3)
    arrofstr.push(strings[i])
  }
    return arrofstr
  
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"]))
// Question 5
function filterEven(numbers) {
  let newarr=[]
  for(var i=0; i<numbers.length; i++){
    if(numbers[i]%2==0)
    newarr.push(numbers[i])
  }
  return newarr
}
console.log(filterEven([1,2,3,4,5,6]))

// Question 6



 
  
    
    function pluck(objects, key) {
      // Your code here
    let newarr=[]
       
        for(let i=0; i<objects.length; i++){ 
            let val=objects[i].name
         newarr[i]=val
 
 
      }
      return newarr
   }
 
    console.log(pluck([{name: "John", age: 30}, {name: "Jane", age: 25}], "name")) //Example output: ["John", "Jane"]

    
      
 


// Question 7
function isPalindrome(str) {
  var flag=0
      
      var j=str.length-1
           for(var i=0; i<=j; i++){
            
         
           if(str[i]!=str[j])
           return false
           
            
          
            
            
            j--
         }
         
         return true
         
         
    }

       console.log(isPalindrome("racecar")) 


// Question 8
function mostFrequent(str) {
  let c=[]
      for(var i=0; i<str.length; i++){

        for(var j=0; j<str.length; j++){
          if(str[i]==str[j] && i!=j){        
          c.push(str[i])
          break
        }
        }
      }
      return c
   }  
       
   console.log(mostFrequent("hello world"))



// Question 9
function stringLengths(strings) {
  let lofS=[]
      for(var i=0; i<strings.length; i++)
        lofS.push(strings[i].length)
        

    return lofS
  }

  console.log(stringLengths(["hi","hello","hey"]))



// Question 10
function firstGreater(numbers) {
  var index=0
      var n=0
        for(var i=0; i<numbers.length; i++){
          if(numbers[i]>=10){
          
           index= i
           n=numbers[i]
           break
          }
           
        }
        return {index,n}
      
     }
     console.log(firstGreater([1,5,15,20]))

     
    
    
  
