// Write your function here
function countAllCharacters(text){
    let count = {};

    for(let i = 0; i < text.length; i++){
        if(count[text.charAt(i)]==null){
            count[text.charAt(i)] = 0;
        }
        count[text.charAt(i)]++;
    }
    return count;
}