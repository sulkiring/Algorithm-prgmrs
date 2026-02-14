function solution(s) {
    let count = 0;
    let removed = 0;
    
    while (s !== "1") {
        count++;
        
        let ones = 0;
        
        for (const ch of s) {
            if (ch==="1") {
                ones++
            } else {
                removed++
            }
        }
        
        s=ones.toString(2);
    }
    return [count, removed];
}