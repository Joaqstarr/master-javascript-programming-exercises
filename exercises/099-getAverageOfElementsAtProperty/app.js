function getAverageOfElementsAtProperty(obj, key) {
  if(obj[key] == null)
    return 0;

  let arr = obj[key];
  
  let out = 0;
  for(let i = 0; i < arr.length; i++){
      out += arr[i];
  }
  if(arr.length >0)
   out = out/arr.length;

  return out;
}