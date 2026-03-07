function solution(num_list, n) {
    let first = num_list.slice(0,n);
    let last = num_list.slice(n);
    
    return last.concat(first);
}