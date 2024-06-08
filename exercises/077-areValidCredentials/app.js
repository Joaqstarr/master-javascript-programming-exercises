// Write your function here
function areValidCredentials(name, password){
    return isMinLength(name, 4) && isMinLength(password, 8);
}

function isMinLength(text, length){
    return text.length >= length;
}