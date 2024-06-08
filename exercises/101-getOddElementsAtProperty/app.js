function getOddElementsAtProperty(obj, key) {
  if(obj[key] == null)
    return [];

let arr = obj[key];
let outArray = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2===1){
        outArray.push(arr[i]);
    }
}
return outArray;
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
