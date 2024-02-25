function removeDuplicates(nums: number[]): number {
    let j : number = 1;
    let l : number = 1;
    
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            for(let k = i; nums[k + 1] && nums[k] <= nums[k + 1]; k++) {
                    let tmp = nums[k];
                    nums[k] = nums[k + 1];
                    nums[k + 1] = tmp;
            }
            if (j < nums.length)
                i--;
        }
        else if (j < nums.length)
            l++;
        j++;
    }
    return l;
};

removeDuplicates([1,1,1,2,2,3,3,4,4,5,5]);

/* 
    1 1 1 2 3 4 2 3
*/ 