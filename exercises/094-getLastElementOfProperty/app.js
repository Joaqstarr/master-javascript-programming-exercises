function getLastElementOfProperty(obj, key){
    if(obj[key] == null){
        return undefined;
    }
    return obj[key][obj[key].length-1];
}