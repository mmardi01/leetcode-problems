function divideArray(nums: number[], k: number): number[][] {
    if (nums.length % 3 !== 0)
        return [];
    nums.sort((a,b) => a-b);
    let res: number[][] = [];
    let s = 0;
    for(let i = 0; i < nums.length; i += 3) {
        res.push([]);
        for(let j = 0; j < 3; j++) {
            if (j == 1 && nums[i + j] - res[s][0] > k)
                return [];
            if (j == 2 && (nums[i + j] - res[s][1] > k || nums[i + j] - res[s][0] > k))
                return [];
            res[s][j] = nums[i + j];
        }
        s++;
    }
    return res;
};

const nums = [15,13,12,13,12,14,12,2,3,13,12,14,14,13,5,12,12,2,13,2,2];
console.log(divideArray(nums,2));

