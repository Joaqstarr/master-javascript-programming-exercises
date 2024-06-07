let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for(const key in obj2){
        console.log(obj2[key]);
        if(obj1[key] == null){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}
