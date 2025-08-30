/**
 * Maximum Subarray Problem (Kadane's Algorithm)
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Find the maximum sum of any contiguous subarray using Kadane's algorithm.
 * @param {number[]} nums - Array of integers
 * @return {number} - Maximum subarray sum
 */
function maxSubarray(nums) {
    // TODO: Implement Kadane's algorithm
    return 0;
}

// Test cases
if (require.main === module) {
    // Test case 1
    const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(`Input: [${nums1.join(',')}]`);
    // console.log(`Maximum subarray sum: ${maxSubarray(nums1)}`);
    
    // Test case 2
    const nums2 = [1];
    console.log(`Input: [${nums2.join(',')}]`);
    // console.log(`Maximum subarray sum: ${maxSubarray(nums2)}`);
    
    // Test case 3
    const nums3 = [5, 4, -1, 7, 8];
    console.log(`Input: [${nums3.join(',')}]`);
    // console.log(`Maximum subarray sum: ${maxSubarray(nums3)}`);
}

module.exports = maxSubarray;
