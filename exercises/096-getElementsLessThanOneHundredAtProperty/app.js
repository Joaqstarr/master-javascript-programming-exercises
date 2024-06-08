function getElementsLessThan100AtProperty(obj, key){
    if(obj[key] == null)
        return [];

    let arr = obj[key];
    let outArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 100){
            outArray.push(arr[i]);
        }
    }
    return outArray;
}