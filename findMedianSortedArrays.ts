function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merge: number[] = [];

  for (let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
    if (nums1[i] === nums2[j]) merge.push(nums1[i++], nums2[j++]);
    else if ((nums1[i] !== undefined && nums2[j] !== undefined) && (nums1[i] < nums2[j])) merge.push(nums1[i++]);
    else if ((nums1[i] !== undefined && nums2[j] !== undefined) && (nums1[i] > nums2[j])) merge.push(nums2[j++]);
    else if (nums1[i] === undefined) merge.push(nums2[j++]);
    else if (nums2[j] === undefined) merge.push(nums1[i++]);
  }
  if (merge.length % 2)
    return merge[Math.floor(merge.length / 2)]
 else 
    return (merge[merge.length / 2 - 1] + merge[merge.length / 2]) / 2;
}

const res = findMedianSortedArrays([1,2], [3,4]);

console.log(res);

/* 
    |
 1  3
 |   
 2 

 1 2 3 4 5
*/
