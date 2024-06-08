function getAllButLastElementOfProperty(obj, key) {
  if(!Array.isArray( obj[key]))return [];
  if(obj[key].length === 0)return [];
  let arr = obj[key];
  let outArray = arr.slice(0, arr.length-1);

  return outArray;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
