function findSmallestNumberAmongMixedElements(arr) {
  
  let smallest;
  for(let i = 0; i < arr.length; i++){
      if(Number.isInteger(arr[i])){
          if(smallest != null){
              if(arr[i] < smallest){
                smallest = arr[i];
              }
          }else{
            smallest = arr[i];
          }
      }
  }    
  if(smallest == null)
    smallest = 0;
  return smallest;
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
