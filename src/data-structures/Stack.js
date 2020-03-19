module.exports = class Stack {
  constructor() {
    this.size = 0
  }

  delete() {
    const { size } = this
    if (size <= 0) throw new Error('Stack is empty')
    delete this[size - 1]
    this.size = size - 1
    return this
  }

  peek() {
    const { size } = this
    const item = this[size - 1]
    return item
  }

  pop() {
    const { size } = this
    if (size <= 0) throw new Error('Stack is empty')
    const item = this.peek()
    this.delete()
    return item
  }

  push(item) {
    const { size } = this
    this[size] = item
    this.size = size + 1
    return this
  }

  print() {
    const output = JSON.stringify(this, null, 2)
    console.log(output)
  }
}
