function average(arr) {
  // your code here
  return sum(arr)/arr.length;
  
  
}

function sum(arr) {
  // your code here
  let out = 0;
  for(let i = 0; i < arr.length; i++){
    out += arr[i];
  }
  return out;
}

console.log(average([1, 2])); // --> 1.5
