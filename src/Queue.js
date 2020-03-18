export default class Queue {
  constructor() {
    this.index = 0
  }

  add(item) {
    this.index = this.index + 1
    this[this.index] = item
    return this
  }

  peek() {
    const { index } = this
    return this[index]
  }

  poll() {
    const { index } = this
    if (index <= 0) throw new Error('Stack is empty')
    const item = this.peek()
    this.remove()
    return item
  }

  remove() {
    const { index } = this
    if (index <= 0) throw new Error('Stack is empty')
    delete this[index]
    this.index = index - 1
  }
}
