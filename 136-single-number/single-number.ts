function singleNumber(nums: number[]): number {
    let leftover: number = 0;

    for(let i = 0; i < nums.length; i++) {
        leftover = leftover ^ nums[i]
    }
    
    return leftover;
};