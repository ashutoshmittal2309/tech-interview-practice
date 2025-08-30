/**
 * Two Sum Problem
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the
 * same element twice.
 * You can return the answer in any order.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Find two numbers in the array that add up to the target.
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Array containing indices of the two numbers
 */
function twoSum(nums, target) {
    // TODO: Implement the solution
    return [];
}

// Test cases
if (require.main === module) {
    // Test case 1
    const nums1 = [2, 7, 11, 15];
    const target1 = 9;
    console.log(`Input: nums = [${nums1.join(',')}], target = ${target1}`);
    // console.log(`Output: [${twoSum(nums1, target1).join(',')}]`);
    
    // Test case 2
    const nums2 = [3, 2, 4];
    const target2 = 6;
    console.log(`Input: nums = [${nums2.join(',')}], target = ${target2}`);
    // console.log(`Output: [${twoSum(nums2, target2).join(',')}]`);
}

module.exports = twoSum;
