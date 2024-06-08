function getProductOfAllElementsAtProperty(obj, key) {
  if(!Array.isArray( obj[key]))return 0;
  if(obj[key].length === 0)return 0;
  let arr = obj[key];
  let product = arr[0];

  for(let i = 1; i < arr.length; i++){
    product *= arr[i];
  }
  return product;
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
