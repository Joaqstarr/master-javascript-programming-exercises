// Write your function here
function isOdd(num){
    return !(num%2===0);
}

function areBothOdd(num1, num2){
    return isOdd(num1) && isOdd(num2);
}