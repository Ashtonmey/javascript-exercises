
const repeatString = function(repeatWord, repeatNumber) {

let sentence = "";

if (repeatNumber >= 0)
{
    for (i = 1; i <= repeatNumber; i++)
    {
        sentence = sentence.concat(repeatWord);
    }
} else 
{
    return "ERROR";
}

return sentence;

};

// Do not edit below this line
module.exports = repeatString;
