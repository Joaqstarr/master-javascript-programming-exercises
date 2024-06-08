function getNthElementOfProperty(obj, key, n){
    if(obj[key] == null){
        return undefined;
    }
    return obj[key][n];
}