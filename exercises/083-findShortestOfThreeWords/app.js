function findShortestOfThreeWords(word1, word2, word3){
    let shortestLength = word1;
    if(word2.length < shortestLength.length){
        shortestLength = word2;
    }
    if(word3.length < shortestLength.length){
        shortestLength = word3;
    }
    return shortestLength;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
