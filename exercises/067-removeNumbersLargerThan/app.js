let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for(const key in obj){
        if(Number.isInteger(obj[key])){
            if(obj[key] > num){
                delete obj[key];
            }
        }
    }
    
}
