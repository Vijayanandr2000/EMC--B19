//leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
https: var merge = function (a, m, b, n) {
  let ans = [];

  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (a[i] < b[j]) {
      ans.push(a[i]);
      i++;
    } else {
      ans.push(b[j]);
      j++;
    }
  }

  while (i < m) {
    ans.push(a[i]);
    i++;
  }

  while (j < n) {
    ans.push(b[j]);
    j++;
  }

  console.log(ans);

  for (let i = 0; i < ans.length; i++) {
    a[i] = ans[i];
  }
};
