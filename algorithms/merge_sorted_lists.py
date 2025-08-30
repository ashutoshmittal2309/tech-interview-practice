'''
Merge Two Sorted Lists Problem

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing 
together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Time Complexity: O(n + m) where n and m are the lengths of the two lists
Space Complexity: O(1) iterative solution, O(n + m) recursive solution
'''

class ListNode:
    """
    Definition for singly-linked list.
    """
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(list1, list2):
    """
    Merge two sorted linked lists and return the head of the new list.
    
    Args:
        list1: Head of the first sorted linked list
        list2: Head of the second sorted linked list
    
    Returns:
        Head of the merged sorted linked list
    """
    # TODO: Implement the merge logic
    pass

def create_linked_list(values):
    """
    Helper function to create a linked list from a list of values.
    """
    if not values:
        return None
    
    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def linked_list_to_list(head):
    """
    Helper function to convert a linked list to a Python list for testing.
    """
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

# Test cases
if __name__ == "__main__":
    # Test case 1
    list1 = create_linked_list([1, 2, 4])
    list2 = create_linked_list([1, 3, 4])
    print("Input: list1 = [1,2,4], list2 = [1,3,4]")
    # merged = merge_two_lists(list1, list2)
    # print(f"Output: {linked_list_to_list(merged)}")
    
    # Test case 2
    list1 = create_linked_list([])
    list2 = create_linked_list([])
    print("Input: list1 = [], list2 = []")
    # merged = merge_two_lists(list1, list2)
    # print(f"Output: {linked_list_to_list(merged)}")
