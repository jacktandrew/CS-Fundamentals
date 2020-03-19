const BinaryTree = require('./BinaryTree');

describe('BinaryTree', () => {
  let binaryTree

  beforeEach(() => {
    binaryTree = new BinaryTree()
  })

  test('should exist', () => {
    const expected = {
      root: null
    }
    expect(binaryTree).toMatchObject(expected)
  })

  test('should insert larger numbers on the right', () => {
    const expected = {
      root: {
        value: 5,
        right: { value: 6 }
      }
    }

    binaryTree.insert(5)
    binaryTree.insert(6)

    expect(binaryTree).toMatchObject(expected)
  })

  test('should insert smaller numbers on the left', () => {
    const expected = {
      root: {
        value: 5,
        left: { value: 4 }
      }
    }

    binaryTree.insert(5)
    binaryTree.insert(4)

    expect(binaryTree).toMatchObject(expected)
  })

  test('should find max', () => {
    binaryTree.insert(7)
    binaryTree.insert(9)
    binaryTree.insert(3)

    expect(binaryTree.max()).toBe(9)
  })

  test('should find min', () => {
    binaryTree.insert(7)
    binaryTree.insert(9)
    binaryTree.insert(3)

    expect(binaryTree.min()).toBe(3)
  })

  test('should have "contains" method', () => {
    binaryTree.insert(7)
    binaryTree.insert(9)
    binaryTree.insert(3)

    expect(binaryTree.contains(7)).toBe(true)
  })

  test('should remove target leafs', () => {
    binaryTree.insert(11)
    binaryTree.insert(12)
    binaryTree.insert(6)
    binaryTree.insert(10)

    expect(binaryTree.contains(11)).toBe(true)
    binaryTree.remove(11)
    expect(binaryTree.contains(11)).toBe(false)
  })
})
