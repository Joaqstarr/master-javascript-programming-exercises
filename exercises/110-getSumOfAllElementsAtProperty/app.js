function getSumOfAllElementsAtProperty(obj, key) {
    if(!Array.isArray( obj[key]))return 0;
    if(obj[key].length === 0)return 0;
    let arr = obj[key];
    let sum = arr[0];
  
    for(let i = 1; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
          
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
