function filterEvenElements(arr) {
    const output = [];
    for(let i = 0; i<arr.length; i++){
      if(arr[i]%2==0)
        output.push(arr[i]);
    }
   return output; 
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
