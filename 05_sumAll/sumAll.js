const sumAll = function(int1, int2) {

if (int1 < 0 || int2 < 0 || Number.isInteger(int1) == false || Number.isInteger(int2) == false)
{
    return "ERROR";
}

let sum = 0;

let smallInt = int1; //assume first integer is smaller
let bigInt = int2; //assume second integer is bigger

if (int1 > int2) // test the inverse and swap them around if true
{
    smallInt = int2;
    bigInt = int1;
}

for (i =  smallInt; i <= bigInt; i++)
{
    sum = sum + i;
}

return sum;

};

// Do not edit below this line
module.exports = sumAll;
