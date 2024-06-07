function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    return (isEven(num1) || isEven(num2)) && lessThanNine(num1) && lessThanNine(num2);
}
function isEven(num){
    return num%2===0;
}
function lessThanNine(num){
    return num<9;
}

let output = isEitherEvenAndLessThan9(72, 10);
console.log(output); // --> true
