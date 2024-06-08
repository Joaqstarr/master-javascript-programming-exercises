function getEvenLengthWordsAtProperty(obj, key) {
    if(obj[key] == null)
        return [];

    let arr = obj[key];
    let outArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length%2===0){
            outArray.push(arr[i]);
        }
    }
    return outArray;
}


let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
