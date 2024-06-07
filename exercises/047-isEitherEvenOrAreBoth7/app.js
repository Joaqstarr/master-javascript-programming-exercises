function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return isEven(num1) || isEven(num2) || (isSeven(num1) && isSeven(num2));
}
function isEven(num){
    return num%2===0;
}
function isSeven(num){
    return num===7;
}