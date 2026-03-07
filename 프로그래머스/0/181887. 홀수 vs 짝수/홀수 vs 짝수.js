function solution(num_list) {
    let odd = [];
    let even = [];
    
    for (let i=0; i<num_list.length; i++) {
        if (i%2===0) {
            even.push(num_list[i])
        } else {
            odd.push(num_list[i])
        }
    }
    
    let sum_odd = 0;
    let sum_even = 0;
    
    sum_odd = odd.reduce((acc, cur) => acc+ cur, 0);
    sum_even = even.reduce((acc, cur) => acc + cur, 0);

    return sum_odd>sum_even? sum_odd : sum_even;
}