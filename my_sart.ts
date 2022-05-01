function mySqrt(x: number): number {
    if (x === 1 || x === 0) {
        return x;
    } 
    
    let i = 1; 
    let result = 1;
    
    while (result <= x) {
      i++;
      result = i * i;
    }
    
    return i - 1;
};
