function twoSum(nums: number[], target: number): number[] {
    let pair: number[] = [];
    const seen = new Map<number, number>();


    for(let i: number = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];
        
        if(seen.has(complement)) {
            pair.push(seen.get(complement)!);
            pair.push(i);

            return pair;
        }
        
        seen.set(nums[i], i);
    }

};