//////// Intersection of Two Linked Lists ///////

/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/

// O(N + M) time | O(1) Space
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  // Pointers will match up on second iteration, if not the first
  // Second iteration: Change to opposites head, and eventually theyll match up, 1 by 1
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};

//
// O(N * M) time | O(1) Space
// BRUTE: For each node in list A, traverse over list B and check whether or not the node is present in list B.

var getIntersectionNodeBAD = function (headA, headB) {
  while (headA != null) {
    let pB = headB;
    while (pB != null) {
      if (headA == pB) return headA;
      pB = pB.next;
    }
    headA = headA.next;
  }
  return null;
};
