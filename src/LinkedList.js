class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

export default class LinkedList {
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

  insertAt(data, index) {
    if (index > this.size) throw new Error('Index does not exist')

    const node = new Node(data)
    let preceding = this.head
    let following = null

    if (index === 0) {
      node.next = preceding
      this.head = node
    } else {
      for(let i = 1; i < index - 1; i++) {
        preceding = preceding.next
      }

      following = preceding.next

      node.prev = preceding
      node.next = following

      preceding.next = node
      following.prev = node
    }

    this.size = this.size + 1
    return this
  }

  remove(target) {
    let preceding = null
    let following = null
    let current = this.head

    while (current) {
      if (current.data === target) {
        following = current.next
        preceding.next = following
        following.prev = preceding
        this.size = this.size - 1
      }

      preceding = current
      current = current.next
    }

    return this
  }

  removeAt(index) {
    if (index > this.size) throw new Error('Index does not exist')

    let preceding = null
    let following = null
    let target = this.head

    if (index === 0) {
      this.head = this.head.next
    } else {
      for(let i = 0; i < index; i++) {
        preceding = target
        target = target.next
      }
      following = target.next
      preceding.next = following
      following.prev = preceding
    }

    this.size = this.size - 1
    return this
  }

  print() {
    let current = this.head
    let output = `${current.data}`

    while (current.next) {
      current = current.next
      output += ` => ${current.data}`
    }

    console.log(output)
    return this
  }
}
