// Write your function here
// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3){
    let longestLength = word1.length;
    if(word2.length > longestLength){
        longestLength = word2.length;
    }
    if(word3.length > longestLength){
        longestLength = word3.length;
    }
    return longestLength;
}
