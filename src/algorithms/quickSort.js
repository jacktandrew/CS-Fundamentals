module.exports = function quickSort(list) {
  if (list.length <= 1) return list
  const copy = [...list]
  const left = []
  const right = []
  const pivot = copy.pop()

  copy.forEach((item) => {
    if (item <= pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}
