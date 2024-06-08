// Write your function here
function keep(arr, keeper){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === keeper){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}