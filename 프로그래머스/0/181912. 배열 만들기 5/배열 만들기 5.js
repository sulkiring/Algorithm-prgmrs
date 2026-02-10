function solution(intStrs, k, s, l) {
    const result = [];
    
    for (const str of intStrs) {
        const sliced = str.substr(s,l);
        const num = Number(sliced);
        
        if (num>k) result.push(num);
    }
    return result;
}