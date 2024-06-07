function getLengthOfThreeWords(word1, word2, word3) {
  let output = word1.length;
  output += word2.length;
  output += word3.length;

  return output;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
