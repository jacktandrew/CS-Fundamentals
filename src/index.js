const BinaryTree = require('./data-structures/BinaryTree')
const LinkedList = require('./data-structures/LinkedList')
const Queue = require('./data-structures/Queue')
const Stack = require('./data-structures/Stack')
const quickSort = require('./algorithms/quickSort')
const radixSort = require('./algorithms/radixSort')

const getRandomNumber = () => Math.floor(Math.random() * 100)

const getRandomList = length => {
  const list = []
  for(let i = 0; i < length; i++) {
    list.push(getRandomNumber())
  }
  return list
}

const list = getRandomList(9)
console.log('list', list)
const sorted = radixSort(list)
console.log('sorted', sorted)