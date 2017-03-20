// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y)
{
if(y===0){
return "0";
}
var dividison = x / y;
return dividison;

}

function multiply(x,y)
{
    var multipltion = x * y;
    return multipltion;
}

function subtract(x,y)
{
    var subraction = x- y;
return subraction;
}


function add(x,y)
{
return x + y;
}



function triplenumber(x) {
    return x * 3;
}
function power(x,y)
{
	var powerful = Math.pow(x,y)
	return powerful
}

function square_root(x)
{
var square=Math.sqrt(x)	
return square;
}

function logBase10(x)
{
	var log=Math.log10(x)
	return log;
}

function generateRandomNumber()
{
var generate=Math.random()	

return generate;
}
