const BinaryTree = require('./data-structures/BinaryTree')
const LinkedList = require('./data-structures/LinkedList')
const Queue = require('./data-structures/Queue')
const Stack = require('./data-structures/Stack')
const quickSort = require('./algorithms/quickSort')
const { radixSortMsd, radixSortLsd } = require('./algorithms/radixSort')

const getRandomNumber = () => Math.floor(Math.random() * 50000)

const getRandomList = length => {
  const list = []
  for(let i = 0; i < length; i++) {
    list.push(getRandomNumber())
  }
  return list
}

const words = ['angel', 'cut', 'bone', 'ax', 'a', 'an', 'bat', 'cargo', 'apple']
const numbers = getRandomList(99)

console.log('radixSortMsd', radixSortMsd(words))
console.log('radixSortLsd', radixSortLsd(numbers))