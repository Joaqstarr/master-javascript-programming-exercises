function filterOddLengthWords(words) {
    let newArray = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].length%2 ===1){
            newArray.push(words[i]);
        }
    }
    return newArray;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
