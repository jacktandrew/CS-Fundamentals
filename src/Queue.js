module.exports = class Queue {
  constructor() {
    this.size = 0
    this.start = 0
    this.end = 0
  }

  add(item) {
    this[this.end] = item
    this.size = this.size + 1
    this.end = this.end + 1

    return this
  }

  peek() {
    if (this.size <= 0) throw new Error('Queue is empty')
    return this[this.start]
  }

  poll() {
    const item = this.peek()
    this.remove()
    return item
  }

  remove() {
    if (this.size <= 0) throw new Error('Queue is empty')
    delete this[this.start]
    this.start = this.start + 1
    this.size = this.size - 1
  }

  print() {
    const output = JSON.stringify(this, null, 2)
    console.log(output)
  }
}
