function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i = 0, j = 0; j < n || i < m;) {
        if (nums1[i] > nums2[j] && i < m) {
            let tmp = nums1[i];
            nums1[i] = nums2[j];
            nums2[j] = tmp;
            i++;
        }
        else if (nums1[i] <= nums2[j] && i < m) {
            i++;
        }
        else 
            nums1[i++] = nums2[j++];
    }
};

merge([1,2,3,0,0,0],3, [2,5,6], 3);