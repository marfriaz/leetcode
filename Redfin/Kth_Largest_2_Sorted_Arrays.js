/*Given two sorted arrays nums1 and nums2 of size m and n respectively and an int k. 
Find the k-th largest element of these arrays.
Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

You may assume k is always valid, 1 ≤ k ≤ m + n.
*/
// Naive: merge them and find kth largest = O(m+n)

// Binary search for longer array
// Time complexity: O(logK)
// Space complexity: O(1)

var findKthSortedArrays = function (nums1, nums2, K) {
  let arr1Length = nums1.length;
  let arr2Length = nums2.length;

  // We want the greater array
  if (arr1Length > arr2Length) return findKthSortedArrays(nums2, nums1, K);

  // arr1Length is always >= arr2Length
  let left = Math.max(0, K - arr2Length);
  let right = Math.min(K, arr1Length);
  // lt: put all element in B. (K-m in A, in case K>=m else 0)
  // rt: put all in element in A .
  while (left <= right) {
    let middle = (left + right) / 2;
    let y = K - middle;

    let maxLeftX = middle - 1 >= 0 ? nums1[middle - 1] : -Infinity;
    let minRightX = middle < arr1Length ? nums1[middle] : Infinity;

    let maxLeftY = y - 1 >= 0 ? nums2[y - 1] : -Infinity;
    let minRightY = y < arr2Length ? nums2[y] : Infinity;

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      return Math.max(maxLeftX, maxLeftY);
    } else if (maxLeftX > minRightY) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

let nums1 = [-2, -1, 3, 5, 6, 8],
  nums2 = [0, 1, 2, 5, 9],
  k = 4;

console.log(findKthSortedArrays(nums1, nums2, k));
