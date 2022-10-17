const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.startOfQueue = null;
    this.endOfQueue = null;
  }
  getUnderlyingList() {
    return this.startOfQueue;
  }

  enqueue(value) {
    if (this.startOfQueue) {
      let listNode = new ListNode(value);
      this.endOfQueue.next = listNode;
      this.endOfQueue = listNode;
    } else {
      this.startOfQueue = new ListNode(value);
      this.endOfQueue = this.startOfQueue;
    }
  }

  dequeue() {
    let result = this.startOfQueue.value;
    this.startOfQueue = this.startOfQueue.next;

    return result;
  }
}

module.exports = {
  Queue,
};
