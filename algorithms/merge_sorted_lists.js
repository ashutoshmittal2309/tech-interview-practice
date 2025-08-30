/**
 * Merge Two Sorted Lists Problem
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Time Complexity: O(n + m) where n and m are the lengths of the two lists
 * Space Complexity: O(1) iterative solution, O(n + m) recursive solution
 */

/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode} next
 * @constructor
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Merge two sorted linked lists and return the head of the new list.
 * @param {ListNode} list1 - Head of the first sorted linked list
 * @param {ListNode} list2 - Head of the second sorted linked list
 * @return {ListNode} - Head of the merged sorted linked list
 */
function mergeTwoLists(list1, list2) {
    // TODO: Implement the merge logic
    return null;
}

/**
 * Helper function to create a linked list from an array of values.
 * @param {number[]} values - Array of values
 * @return {ListNode} - Head of the linked list
 */
function createLinkedList(values) {
    if (!values.length) {
        return null;
    }
    
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

/**
 * Helper function to convert a linked list to an array for testing.
 * @param {ListNode} head - Head of the linked list
 * @return {number[]} - Array representation of the linked list
 */
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
if (require.main === module) {
    // Test case 1
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    console.log("Input: list1 = [1,2,4], list2 = [1,3,4]");
    // const merged = mergeTwoLists(list1, list2);
    // console.log(`Output: [${linkedListToArray(merged).join(',')}]`);
    
    // Test case 2
    const list3 = createLinkedList([]);
    const list4 = createLinkedList([]);
    console.log("Input: list1 = [], list2 = []");
    // const merged2 = mergeTwoLists(list3, list4);
    // console.log(`Output: [${linkedListToArray(merged2).join(',')}]`);
}

module.exports = { mergeTwoLists, ListNode, createLinkedList, linkedListToArray };
