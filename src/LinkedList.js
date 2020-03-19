class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const node = new Node(data)

    if (this.head) {
      const tail = this.getTail(this.head)
      node.prev = tail
      tail.next = node
    } else {
      this.head = node
    }

    this.size = this.size + 1
    return this
  }

  getTail(current) {
    while (current.next) {
      current = current.next
    }

    return current
  }

  getNodeByIndex(targetIndex) {
    let current = this.head

    for(let i = 0; i < targetIndex; i++) {
      current = current.next
    }

    return current
  }

  insertNode(targetIndex, node) {
    const following = this.getNodeByIndex(targetIndex)
    const preceding = following.prev

    following.prev = node
    preceding.next = node

    node.next = following
    node.prev = preceding

    this.size = this.size + 1
  }

  replaceHead(node) {
    node.next = this.head
    this.head.prev = node
    this.head = node
    this.size = this.size + 1
  }

  insertAt(targetIndex, data) {
    if (targetIndex > this.size) throw new Error('Target index does not exist')

    const node = new Node(data)

    if (targetIndex === this.size) {
      this.add(data)
    } else if (targetIndex === 0) {
      this.replaceHead(node)
    } else {
      this.insertNode(targetIndex, node)
    }

    return this
  }

  removeItem(node) {
    const preceding = node.prev
    const following = node.next

    if (preceding) {
      preceding.next = following
    } else {
      this.head = following
    }

    if (following) following.prev = preceding

    this.size = this.size - 1
  }

  remove(targetData) {
    let node = this.head

    while (node) {
      if (node.data === targetData) this.removeItem(node)
      node = node.next
    }

    return this
  }

  removeAt(targetIndex) {
    if (targetIndex >= this.size) throw new Error('Target index does not exist')

    if (targetIndex === 0) {
      this.head = this.head.next
    } else {
      const node = this.getNodeByIndex(targetIndex)
      this.removeItem(node)
    }

    return this
  }

  print() {
    let current = this.head || {}
    let output = `${current.data}`

    while (current.next) {
      current = current.next
      output += ` <-> ${current.data}`
    }

    console.log(output)
    return this
  }
}
