function removeFromFrontOfNew(arr) {
    let arr2 = arr.slice(1, arr.length);
    return arr2;
    
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
