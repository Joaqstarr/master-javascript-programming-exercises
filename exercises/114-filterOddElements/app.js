function filterOddElements(arr) {
  const output = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 == 1)
      output.push(arr[i]);
  }
 return output; 
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
