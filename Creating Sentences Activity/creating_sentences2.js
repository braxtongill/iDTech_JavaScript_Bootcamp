// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE
var words = ['This ', 'is ', 'JavaScript ', 'Bootcamp!']

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
var sentence = "";
let length = 
// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE

function doNotUse() {
   //for(let i = 0; i < word.length(word); i++) {
  //     sentence += word[i];
 //  }
  // return word;
  //For some reason, if I remove this completely useless function, my entire code breaks. This took me an hour to troubleshoot- I still have no idea why.
   return "hello";
}
function createSentence(word) {
    let wordlength = word.length;
   for(let i = 0; i < wordlength; i++) {
    sentence += word[i];
   }
   return sentence;
}

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log(createSentence(words));