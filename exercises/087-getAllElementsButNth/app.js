function getAllElementsButNth(array, n) {
    // your code here
    let arrL = array.slice(0, n);
    let arrR = array.slice(n + 1, array.length);

    return arrL.concat(arrR);

}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
