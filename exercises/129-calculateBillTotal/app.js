function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tip = 0.15 * preTaxAndTipAmount;
    let tax = 0.095 * preTaxAndTipAmount;
    return preTaxAndTipAmount + tip + tax;
    
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
