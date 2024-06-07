// Write your function here
function isEven(num){
    return num%2===0;
}

function isEitherEven(num1, num2){
    return isEven(num1) || isEven(num2);
}