const BinaryTree = require('./BinaryTree')
const LinkedList = require('./LinkedList')
const Queue = require('./Queue')
const Stack = require('./Stack')

const binaryTree = new BinaryTree()
const getRand = () => Math.floor(Math.random() * 9)

binaryTree.insert(2)
binaryTree.insert(4)
binaryTree.insert(3)
binaryTree.insert(5)
binaryTree.insert(6)
binaryTree.insert(4)
binaryTree.insert(4)
binaryTree.print()
binaryTree.remove(4)
binaryTree.print()

window.binaryTree = binaryTree

