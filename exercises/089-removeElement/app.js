// Write your function here
function removeElement(arr, remover){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != remover){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}