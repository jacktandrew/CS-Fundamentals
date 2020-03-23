const insertionSort = list => {
  let j

  list.forEach((value, i) => {
    for (j = i - 1; j >= 0 && list[j] > value; j--) {
      list[j + 1] = list[j]
    }

    list[j + 1] = value
  })

  return list
}

module.exports = insertionSort
