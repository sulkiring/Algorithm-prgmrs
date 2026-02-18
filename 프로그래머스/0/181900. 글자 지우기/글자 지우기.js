function solution(my_string, indices) {
    const removeSet = new Set(indices);
    let result = "";
    
    for (let i=0; i<my_string.length; i++) {
        if (removeSet.has(i)) continue;
        
        result += my_string[i];
    }
    return result;
}