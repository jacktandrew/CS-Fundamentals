const LinkedList = require('./LinkedList')

describe('LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('should exist', () => {
    expect(linkedList).toMatchObject({ head: null, size: 0 })
  })

  test('should add node to head', () => {
    linkedList.add('An added value')

    const expected = {
      head: { data: 'An added value' },
      size: 1,
    }

    expect(linkedList).toMatchObject(expected)
  })

  test('should chain additional values', () => {
    linkedList.add('first')
    linkedList.add('second')
    linkedList.add('third')

    const expected = {
      head: {
        data: 'first',
        next: {
          data: 'second',
          next: {
            data: 'third',
            next: null,
          }
        }
      },
      size: 3,
    }

    expect(linkedList).toMatchObject(expected)
  })

  test('should have "insertAt" method', () => {
    linkedList.insertAt(0, 'first')
    linkedList.insertAt(1, 'third')
    linkedList.insertAt(1, 'second')

    const expected = {
      head: {
        data: 'first',
        next: {
          data: 'second',
          next: {
            data: 'third',
            next: null,
          }
        }
      },
      size: 3,
    }
    expect(linkedList).toMatchObject(expected)
  })

  test('should remove all values with "remove"', () => {
    linkedList.add('_')
      .add('a').add('_')
      .add('b').add('_')
      .add('c').add('_')

    linkedList.remove('_')

    const expected = {
      head: {
        data: 'a',
        next: {
          data: 'b',
          next: {
            data: 'c',
            next: null,
          },
        },
      },
      size: 3,
    }
    expect(linkedList).toMatchObject(expected)
  })

  test('should remove specific index with "removeAt"', () => {
    linkedList.add('a').add('_').add('b').add('c')

    linkedList.removeAt(1)

    const expected = {
      head: {
        data: 'a',
        next: {
          data: 'b',
          next: {
            data: 'c',
            next: null,
          },
        },
      },
      size: 3,
    }
    expect(linkedList).toMatchObject(expected)
  })

  test('should throw errors', () => {
    expect(() => linkedList.removeAt(9)).toThrow()
    expect(() => linkedList.insertAt(9, 'x')).toThrow()
  })
})
