class DoublyLinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.length = 0
    }
    
    unshift(key, val) {
      const node = new Node(key, val) /
      if (this.length === 0) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
      this.length++
      return node
    }
    pop() {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.length = 0
      } else {
        this.tail = this.tail.prev
        this.tail.next.prev = null
        this.tail.next = null
        this.length--
      }
    }
    
    remove(node) {
      if (node.next !== null) {
        node.next.prev = node.prev
      } else {
        this.tail = node.prev
      }
      if (node.prev !== null) {
        node.prev.next = node.next
      } else {
        this.head = node.next
      }
      node.next = null
      node.prev = null
      this.length--
      return node
    }
  }
}

new DoublyLinkedList();
