function solution(myString, pat) {
    const str = myString.toLowerCase();
    const target = pat.toLowerCase();
    
    return str.includes(target)?1:0;
}