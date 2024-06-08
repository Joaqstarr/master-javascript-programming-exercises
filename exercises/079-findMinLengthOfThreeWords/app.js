// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3){
    let shortestLength = word1.length;
    if(word2.length < shortestLength){
        shortestLength = word2.length;
    }
    if(word3.length < shortestLength){
        shortestLength = word3.length;
    }
    return shortestLength;
}
