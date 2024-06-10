function squareElements(arr) {
  const arr2 = arr.map((value)=>Math.pow(value, 2));
  return arr2;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
