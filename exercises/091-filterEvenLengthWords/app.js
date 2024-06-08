function filterEvenLengthWords(words) {
    let newArray = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].length%2 ===0){
            newArray.push(words[i]);
        }
    }
    return newArray;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
