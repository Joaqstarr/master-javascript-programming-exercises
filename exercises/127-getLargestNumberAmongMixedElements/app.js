function getLargestNumberAmongMixedElements(arr) {
    let largest;
    for(let i = 0; i < arr.length; i++){

        if(Number.isInteger(arr[i])){

            if(largest != null){
                if(arr[i] > largest){
                  largest = arr[i];
                }
            }else{
              largest = arr[i];
            }
        }
    }

    if(largest == null)
        largest = 0;

    return largest;
    
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
