function or(expression1, expression2) {
  if(expression1){
    return true;
  }
  if(expression2){
    return true;
  }
  return false;
  
}

let output = or(true, false);
console.log(output); // --> true;
