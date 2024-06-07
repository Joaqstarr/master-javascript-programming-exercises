// Write your function here

function isEvenAndGreaterThanTen(num){
    return isEven(num)&& (num > 10);
}

function isEven(num){
    return num%2===0;
}