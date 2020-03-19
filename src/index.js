const LinkedList = require('./LinkedList')
const Queue = require('./Queue')
const Stack = require('./Stack')

const linkedList = new LinkedList()
// linkedList.add('1').add('2').add('3').add('4').add('5').add('6')

// linkedList.add('initial')
linkedList.print()
linkedList.insertAt(0, 'insertedAtZero')
// linkedList.insertAt(2, 'insertedAtTwo')
console.log('linkedList', linkedList)
// linkedList.insertAt(1, 'insertedAtOne')

linkedList.print()
// console.log('linkedList', linkedList)