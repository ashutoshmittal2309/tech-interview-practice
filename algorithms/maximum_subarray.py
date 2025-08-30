'''
Maximum Subarray Problem (Kadane's Algorithm)

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Time Complexity: O(n)
Space Complexity: O(1)
'''

def max_subarray(nums):
    """
    Find the maximum sum of any contiguous subarray using Kadane's algorithm.
    
    Args:
        nums: List of integers
    
    Returns:
        Integer representing the maximum subarray sum
    """
    # TODO: Implement Kadane's algorithm
    pass

# Test cases
if __name__ == "__main__":
    # Test case 1
    nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    print(f"Input: {nums1}")
    # print(f"Maximum subarray sum: {max_subarray(nums1)}")
    
    # Test case 2
    nums2 = [1]
    print(f"Input: {nums2}")
    # print(f"Maximum subarray sum: {max_subarray(nums2)}")
    
    # Test case 3
    nums3 = [5, 4, -1, 7, 8]
    print(f"Input: {nums3}")
    # print(f"Maximum subarray sum: {max_subarray(nums3)}")
