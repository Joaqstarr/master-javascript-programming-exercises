function joinArrayOfArrays(arr) {
  // your code here
  let output = [];

   arr.map((valArr)=> output = output.concat(valArr));

  return output;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
