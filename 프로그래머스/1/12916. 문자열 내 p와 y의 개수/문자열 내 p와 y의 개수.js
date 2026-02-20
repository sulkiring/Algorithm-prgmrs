function solution(s){
    const lower = s.toLowerCase();
    
    const pCount = lower.split('p').length-1;
    const yCount = lower.split('y').length-1;
    
    return pCount===yCount;
}