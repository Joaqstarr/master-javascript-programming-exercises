function repeatString(string, num) {
    let output = "";
    for(let i = 0; i < num; i++){
        output += string;
    }
    return output;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
