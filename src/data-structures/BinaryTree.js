class Leaf {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

module.exports = class BinaryTree {
  constructor() {
    this.root = null
  }

  contains(target, branch = this.root) {
    if (this.root === null)
      return false
    else if (target === branch.value)
      return true
    else if (target < branch.value)
      return (branch.left) ? this.contains(target, branch.left) : false
    else
      return (branch.right) ? this.contains(target, branch.right) : false
  }

  getMinLeaf(branch = this.root) {
    return (branch.left) ? this.getMinLeaf(branch.left) : branch
  }

  getRoot() {
    return this.root
  }

  insert(value) {
    const leaf = new Leaf(value)

    if (this.root)
      this.insertLeaf(this.root, leaf)
    else
      this.root = leaf
  }

  insertLeaf(branch, leaf) {
    if (leaf.value <= branch.value) {
      if (branch.left)
        this.insertLeaf(branch.left, leaf)
      else
        branch.left = leaf
    } else {
      if (branch.right)
        this.insertLeaf(branch.right, leaf)
      else
        branch.right = leaf
    }
  }

  max(branch = this.root) {
    if (!this.root) throw new Error('Binary Tree is empty')
    return (branch.right) ? this.max(branch.right) : branch.value
  }

  min(branch = this.root) {
    if (!this.root) throw new Error('Binary Tree is empty')
    return (branch.left) ? this.min(branch.left) : branch.value
  }

  print() {
    console.log(JSON.stringify(this.root, null, 2))
  }

  remove(target) {
    if (!this.root) throw new Error('Binary Tree is empty')
    this.root = this.removeLeaf(target, this.root)
  }

  removeLeaf(target, branch) {
    if (target < branch.value) {
      branch.left = this.removeLeaf(target, branch.left)
      return branch
    } else if (target > branch.value) {
      branch.right = this.removeLeaf(target, branch.right)
      return branch
    } else {
      if (branch.left === null && branch.right === null) {
        return null
      } else if (branch.left === null) {
        return branch.right
      } else if (branch.right === null) {
        return branch.left
      } else {
        const { value } = this.getMinLeaf(branch.right)
        branch.value = value
        branch.right = this.removeLeaf(value, branch.right)
        return branch
      }
    }
  }
}
