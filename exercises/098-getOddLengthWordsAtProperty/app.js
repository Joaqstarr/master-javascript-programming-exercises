function getOddLengthWordsAtProperty(obj, key){
    if(obj[key] == null)
        return [];

    let arr = obj[key];
    let outArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length%2===1){
            outArray.push(arr[i]);
        }
    }
    return outArray;
}