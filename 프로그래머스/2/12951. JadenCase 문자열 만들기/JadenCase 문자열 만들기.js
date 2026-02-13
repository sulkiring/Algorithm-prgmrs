function solution(s) {
   let result = ""  
   let isStart = true
   
   for (const ch of s) {
       if (ch === " ") {
           result += " ";
           isStart = true;
       } else {
           result += isStart? ch.toUpperCase() : ch.toLowerCase();
           isStart = false;
       }
   }
    
    return result;
}