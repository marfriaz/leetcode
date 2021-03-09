//////// Reverse Linked List///////

/* Reverse a singly linked list.
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Time Complexity: O(n), Linear - traverse linked list only once
// Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n)v | O(1) space
function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

var reverseList = function (head) {
  // End of the reversed linked list set to null
  let prev = null;

  // Traverse through the given linked list
  while (head) {
    const temp = head.next; // References the next Node of given linked list
    head.next = prev; // head.next point to previous Node, instead of the next Node of the given linked list
    prev = head; // Move the prev Node pointer up to head
    head = temp; // Move the head up to next Node of the given linked list
  }

  // Prev is the reversed linked list
  return prev;
};

//    1 => 2 => 3=> 4

//  temp = 2
// 2 = null
// prev = 1
// head = 2

// 2 => null => 3=> 4

//
