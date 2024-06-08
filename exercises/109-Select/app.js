function select(arr, obj){
    let outObj ={};
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] != null){
            outObj[arr[i]] = obj[arr[i]];
        }
    }
    return outObj;
}