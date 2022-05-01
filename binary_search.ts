const search = (nums: number[], target: number) => {
    let middle; 
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        middle = Math.round((end - start)/2) + start;
        
        if (target == nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    
    return -1;
}
