function solution(n, k) {
    const result = [];
    
    for (let num=k; num<=n; num+=k) {
        result.push(num);
    }
    return result;
}
