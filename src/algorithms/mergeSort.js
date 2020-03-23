const merge = (left, right) => {
  const results = []
  let l = 0
  let r = 0

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      results.push(left[l])
      l++
    } else {
      results.push(right[r])
      r++
    }
  }

  return results.concat(left.slice(l), right.slice(r))
}

module.exports = function mergeSort(list) {
  if (list.length <= 1) return list

  const middle = Math.floor(list.length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
