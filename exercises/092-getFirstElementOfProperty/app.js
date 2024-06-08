function getFirstElementOfProperty(obj, key){
    if(obj[key] == null){
        return undefined;
    }
    return obj[key][0];
}