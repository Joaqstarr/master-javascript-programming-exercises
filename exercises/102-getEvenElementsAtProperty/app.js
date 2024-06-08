function getEvenElementsAtProperty(obj, key) {
  if(obj[key] == null)
    return [];

  let arr = obj[key];
  let outArray = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i]%2===0){
          outArray.push(arr[i]);
      }
  }
  return outArray;    
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
