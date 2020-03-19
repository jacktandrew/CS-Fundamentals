const Stack = require('./Stack');

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('should exist', () => {
    expect(stack).toMatchObject({ size: 0 })
  })

  test('should have a "push" method', () => {
    stack.push('A pushed value')
    expect(stack).toMatchObject({ 0: 'A pushed value', size: 1 })
  })

  test('should have a "peek" method', () => {
    stack.push('Something to see')
    expect(stack.peek()).toBe('Something to see')
  })

  test('should have a "delete" method', () => {
    stack.push('first').push('second').push('third')
    expect(stack.peek()).toBe('third')
    stack.delete()
    expect(stack.peek()).toBe('second')
  })

  test('should have a "pop" method', () => {
    stack.push('A value to be popped')
    expect(stack.pop()).toBe('A value to be popped')
    expect(stack).toMatchObject({ size: 0 })
  })

  test('should throw error when empty', () => {
    expect(() => stack.delete()).toThrow()
    expect(() => stack.pop()).toThrow()
  })
})
