function computeProductOfAllElements(arr) {
  if(arr.length == 0 )return 0;

  let product = 1;
  arr.map((value)=>product *= value);  
  return product;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
