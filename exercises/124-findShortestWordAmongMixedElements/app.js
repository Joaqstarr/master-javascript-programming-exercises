function findShortestWordAmongMixedElements(arr) {
    let shortest = "";
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'string'){
            if(shortest != ""){
                if(arr[i].length < shortest.length){
                    shortest = arr[i];
                }
            }else{
                shortest = arr[i];
            }
        }
    }    
    return shortest;
}



let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
