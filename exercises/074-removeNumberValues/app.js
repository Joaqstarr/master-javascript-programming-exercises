function removeNumberValues(obj) {
   for (const key in obj){
    if(Number.isInteger(obj[key])){
        delete obj[key];
    }
   }
    
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
