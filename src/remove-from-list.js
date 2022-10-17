const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (node.next === null) {
    node.next = {
      value: listNode.value,
      next: listNode.next
    };
  } else {
    addNode(node.next, listNode);
  }
};

function removeKFromList(l, k) {
  let arr = []
  while(l.next !== null) {
    arr = arr.concat(l.value)
    l = l.next
  }
  arr = arr.concat(l.value)
  try {
    arr = arr.filter(el => el != k)
  } catch {
    return []
  }
  let res = new ListNode(arr[0])
  let cur = res
  for(let i = 1; i < arr.length; i++){
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return res
}

module.exports = {
  removeKFromList,
};
