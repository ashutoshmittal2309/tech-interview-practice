/**
 * Reverse String Problem
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Reverse a string in-place.
 * @param {string[]} s - Array of characters representing the string
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    // TODO: Implement the solution using two pointers
}

// Test cases
if (require.main === module) {
    // Test case 1
    const s1 = ["h", "e", "l", "l", "o"];
    console.log(`Input: [${s1.map(c => `"${c}"`).join(',')}]`);
    // reverseString(s1);
    // console.log(`Output: [${s1.map(c => `"${c}"`).join(',')}]`);
    
    // Test case 2
    const s2 = ["H", "a", "n", "n", "a", "h"];
    console.log(`Input: [${s2.map(c => `"${c}"`).join(',')}]`);
    // reverseString(s2);
    // console.log(`Output: [${s2.map(c => `"${c}"`).join(',')}]`);
}

module.exports = reverseString;
