export default class Stack {
  constructor() {
    this.index = 0
  }

  delete() {
    const { index } = this
    if (index <= 0) throw new Error('Stack is empty')
    delete this[index]
    this.index = index - 1
    return this
  }

  peek() {
    const { index } = this
    const item = this[index]
    return item
  }

  pop() {
    const { index } = this
    if (index <= 0) throw new Error('Stack is empty')
    const item = this.peek()
    this.delete()
    return item
  }

  push(item) {
    const { index } = this
    this.index = index + 1
    this[this.index] = item
    return this
  }
}
