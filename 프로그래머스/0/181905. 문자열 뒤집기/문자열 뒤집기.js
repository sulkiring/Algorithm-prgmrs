function solution(my_string, s, e) {
    const front = my_string.slice(0,s);
    const mid = my_string.slice(s, e+1).split("").reverse().join("");
    const back = my_string.slice(e+1);
    
    return front + mid + back;
}