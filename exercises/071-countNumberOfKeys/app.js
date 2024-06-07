let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    let amt = 0;
    for(const key in obj){
        amt++;
    }
   return amt;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
