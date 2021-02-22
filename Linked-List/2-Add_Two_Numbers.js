//////// Add Two Numbers///////

/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
