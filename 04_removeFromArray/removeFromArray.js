const removeFromArray = function(userArray, deleteItem1, deleteItem2, deleteItem3, deleteItem4) {

let index1 = userArray.indexOf(deleteItem1); 
let index2 = userArray.indexOf(deleteItem2); 
let index3 = userArray.indexOf(deleteItem3); 
let index4 = userArray.indexOf(deleteItem4); 

if (deleteItem1 && index1 != -1) // if first delete item is found
{    
    userArray.splice(index1,1); // remove first instance of first deleteItem   
    index2 = userArray.indexOf(deleteItem2);    
}

if (deleteItem2 && index2 !=-1) // if second delete item is found
{        
    userArray.splice(index2,1); // remove first instance of the second deleteItem 
    index3 = userArray.indexOf(deleteItem3);     
}

if (deleteItem3 && index3 != -1)  // if first delete item is found
{    
    userArray.splice(index3,1); // remove first instance of first deleteItem  
    index4 = userArray.indexOf(deleteItem4);    
}

if (deleteItem4 && index4 !=-1) // if second delete item is found
{        
    userArray.splice(index4,1); // remove first instance of the second deleteItem     
}

return userArray;

};

// Do not edit below this line
module.exports = removeFromArray;
