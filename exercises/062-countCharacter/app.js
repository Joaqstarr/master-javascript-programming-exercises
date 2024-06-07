function countCharacter(str, char) {
    let amt = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === char){
            amt++;
        }
    }
    return amt;
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
