const Queue = require('./Queue')

describe('Queue', () => {
  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  test('should exist', () => {
    expect(queue).toMatchObject({ end: 0, size: 0, start: 0 })
  })

  test('should have an "add" method', () => {
    queue.add('An added value')
    const expected = {
      0: 'An added value',
      end: 1,
      size: 1,
      start: 0,
    }
    expect(queue).toMatchObject(expected)
  })

  test('should have a "peek" method', () => {
    queue.add('A value to be peeked')
    expect(queue.peek()).toBe('A value to be peeked')
  })

  test('should have a "poll" method', () => {
    queue.add('first').add('second').add('third')
    expect(queue.poll()).toBe('first')
    expect(queue.peek()).toBe('second')
    expect(queue.start).toBe(1)
    expect(queue.size).toBe(2)
    expect(queue.end).toBe(3)
  })

  test('should have a "remove" method', () => {
    queue.add('first').add('second').add('third')
    queue.remove()
    expect(queue.peek()).toBe('second')
    expect(queue.size).toBe(2)
  })

  test('should throw error when empty', () => {
    expect(() => queueu.peek()).toThrow()
    expect(() => queueu.remove()).toThrow()
  })
})
