function solution(n) {
    const targetCount = n.toString(2).split('1').length-1;
    
    let next = n+1;
    
    while(next) {
        const count = next.toString(2).split('1').length-1;
        
        if (count===targetCount) {
            
            return next;
        }
        
        next++
    }
}