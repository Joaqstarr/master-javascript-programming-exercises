function getElementOfArrayProperty(obj, key, index) {
    if(!Array.isArray( obj[key]))return undefined;
    if(obj[key].length === 0)return undefined;
    let arr = obj[key];
 
    return arr[index];

}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
