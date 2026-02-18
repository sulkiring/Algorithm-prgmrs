function solution(start_num, end_num) {
    const result = [];
    
    for (let num=start_num; num>=end_num; num--) {
        result.push(num);
    }
    return result;
}