const removeFromArray = function(userArray, deleteArgument) {
   
let cleanArray = [];

if (userArray.indexOf(deleteArgument) != -1)
{

    cleanArray = userArray.slice(userArray.indexOf(deleteArgument));
    return cleanArray;

} else
{
    return userArray;
}

};

// Do not edit below this line
module.exports = removeFromArray;
