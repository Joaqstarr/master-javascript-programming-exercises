function getLengthOfShortestElement(arr) {
    if(arr.length <= 0)return 0;
    // your code here
    let shortest = arr[0].length;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length < shortest)
            shortest = arr[i].length;
    }
    return shortest;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
