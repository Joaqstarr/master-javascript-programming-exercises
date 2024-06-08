function addToBackOfNew(arr, element) {
    // your code here
    let arrNew = arr.slice(0, arr.length);
    arrNew.push(element);
    return arrNew;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
