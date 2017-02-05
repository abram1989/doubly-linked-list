const Node = require('./node');

class LinkedList {
     constructor() {
      this.length = 0;
    }

    append(data) {
      let _Node = new Node(data, this._tail);
      if(this._tail) {
        this._tail.next = _Node;
      }
      this._tail = _Node;
      if(!this._head) {
        this._head = this._tail;
      }
      this.length++;
      return this;
    }

    head() {
      return this._head && this._head.data;
    }

    tail() {
      return this._tail && this._tail.data;
    }

    nodeAt(index) {
      if(index >= this.length) {
        return;
      }
      let currIndex = 0;
      let currItem = this._head;
      while(currIndex < index) {
        currIndex++;
        currItem = currItem.next;
      }
      return currItem;
    }

    at(index) {
      return this.nodeAt(index).data;
    }

    insertAt(index, data) {
      let next = this.nodeAt(index);

      if(next) {
        let _Node = new Node(data, next.prev, next);
        next.prev.next = next.prev = _Node;
		
        this.length++;
		
      } else {
        this.append(data);
      }

      return this;
    }

    isEmpty() {
      return this.length == 0;
    }

    clear() {
      this.length = 0;
      this._head = null;
	  this._tail = null;
      return this;
    }

    deleteAt(index) {
      let node = this.nodeAt(index);
      if(node.prev) {
        node.prev.next = node.next;
      } else {
        this._head = node.next;
      }
      if(node.next) {
        node.next.prev = node.prev;
      } else {
        this._tail = node.prev;
      }
      this.length--;
      return this;
    }

    reverse() {
      let node = this._head;
      let tmp;
      while(node) {
        tmp = node.next;
        node.next = node.prev;
        node.prev = tmp;
        node = tmp;
      }
      tmp = this._head;
      this._head = this._tail;
      this._tail = tmp;
      return this;
    }

    indexOf(data) {
      let index = 0;
      let node = this._head;
      while(node && node.data !== data) {
        node = node.next;
        index++;
      }
      return node ? index : -1;
    }

    toArray() {
      let res = [];
      let node = this._head;
      while(node) {
        res.push(node);
        node = node.next;
      }
      return res;
    }
}

module.exports = LinkedList;
