    // Write your function here
// Write your function here
function getLongestOfThreeWords(word1, word2, word3){
    let longestLength = word1;
    if(word2.length > longestLength.length){
        longestLength = word2;
    }
    if(word3.length > longestLength.length){
        longestLength = word3;
    }
    return longestLength;
}

    

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
