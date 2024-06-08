// Write your function here
function getIndexOf(char, text){
    for(let i = 0; i < text.length; i++){
        if(text.charAt(i) == char){
            return i;
        }
    }
    return -1;
}