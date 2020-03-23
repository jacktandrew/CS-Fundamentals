const BinaryTree = require('./data-structures/BinaryTree')
const LinkedList = require('./data-structures/LinkedList')
const Queue = require('./data-structures/Queue')
const Stack = require('./data-structures/Stack')
const { getSequence } = require('./algorithms/fibonacci')
const insertionSort = require('./algorithms/insertionSort')
const mergeSort = require('./algorithms/mergeSort')
const quickSort = require('./algorithms/quickSort')
const { radixSortMsd, radixSortLsd } = require('./algorithms/radixSort')

const getRandomNumber = () => Math.floor(Math.random() * 50)

const getRandomList = length => {
  const list = []
  for(let i = 0; i < length; i++) {
    list.push(getRandomNumber())
  }
  return list
}

console.log('getSequence', getSequence(9))