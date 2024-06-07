function checkAge(name, age) {
  // your code here
  let output = name + "!";

  if(age >= 21){
    output = "Welcome, " + output;
    return output;
  }


  output = "Go home, " + output;
  return output;
}
