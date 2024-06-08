function getSquaredElementsAtProperty(obj, key) {
  if(obj[key] == null)
    return [];
  if(!Array.isArray(obj[key])){
    return [];
  }
let arr = obj[key];
const outArray = arr.map((val)=>Math.pow(val, 2))
    return outArray;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
