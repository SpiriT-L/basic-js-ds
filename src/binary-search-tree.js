const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }
  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    if (data === this.rootNode.data) return true;
    let node = this.rootNode;

    return find(data, node);

    function find(data, node) {
      return data > node.data
        ? findRightLeft(data, node.right)
        : data < node.data
        ? findRightLeft(data, node.left)
        : true;
    }

    function findRightLeft(data, nextNode) {
      return nextNode ? find(data, nextNode) : false;
    }
  }

  find(data) {
    if (data === this.rootNode.data) return this.rootNode;
    let node = this.rootNode;

    return find(data, node);

    function find(data, node) {
      return data > node.data
        ? findRightLeft(data, node.right)
        : data < node.data
        ? findRightLeft(data, node.left)
        : node;
    }

    function findRightLeft(data, nextNode) {
      return nextNode ? find(data, nextNode) : null;
    }
  }

  remove(data) {
    let node = this.rootNode;

    this.rootNode = removeData(data, node);

    function removeData(data, node) {
      if (!node) return null;

      if (data < node.data && node.left) {
        node.left = removeData(data, node.left);
        return node;
      } else if (data > node.data && node.right) {
        node.right = removeData(data, node.right);
        return node;
      } else {
        if (data === node.data) {
          if (node.right && node.left) {
            let minFromBigger = node.right;
            while (minFromBigger.left) {
              minFromBigger = minFromBigger.left;
            }

            node.data = minFromBigger.data;
            node.right = removeData(minFromBigger.data, node.right);
            return node;
          } else if (node.left) {
            node = node.left;
            return node;
          } else if (node.right) {
            node = node.right;
            return node;
          } else return null;
        }
      }
    }
  }

  min() {
    let node = this.rootNode;

    if (!node) return null;

    if (!node.left && !node.right) {
      return node.data;
    }

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;

    if (!node) return null;

    if (!node.left && !node.right) {
      return node.data;
    }

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
