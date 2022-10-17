const reverseString = function(word) {

//let reversedWordArray = [];
let reversedWord = "";

for (i = word.length; i > 0; i--)
{
    //reversedWordArray[word.length-i] = word.charAt(i-1);  
    reversedWord = reversedWord.concat(word.charAt(i-1))
}

return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
