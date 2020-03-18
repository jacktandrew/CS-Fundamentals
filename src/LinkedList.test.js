const LinkedList = require('./LinkedList');

const linkedList = new LinkedList()
linkedList.add('a')
linkedList.add('b')
linkedList.add('c')

console.log('linkedList', linkedList.print())

// const linkedList = new LinkedList()
// linkedList.add('x')
// linkedList.add('b')
// linkedList.add('x')
// linkedList.add('c')
// linkedList.add('x')
// linkedList.insertAt('a', 0)
// linkedList.insertAt('z', 1)
// console.log('linkedList', linkedList.print())
// linkedList.remove('x')
// console.log('linkedList', linkedList.print())

test('sanity check', () => {
  expect(true).toBe(true)
})
