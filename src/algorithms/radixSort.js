const chars = [
  0,1,2,3,4,5,6,7,8,9,
  'a','b','c','d','e',
  'f','g','h','i','j',
  'k','l','m','n','o',
  'p','q','r','s','t',
  'u','v','w','x','y','z'
]

const radixSortMsd = (list, index = 0) => {
  const buckets = list.reduce((buckets, item) => {
    const char = item.toString()[index] || 0

    if (buckets.hasOwnProperty(char))
      buckets[char].push(item)
    else
      buckets[char] = [item]
    return buckets
  }, {})

  return chars.reduce((acc, char) => {
    const bucket = buckets[char]

    if (!bucket || !bucket.length) return acc

    const sorted = (bucket.length <= 1)
      ? bucket
      : radixSortMsd(bucket, index + 1)

    return acc.concat(sorted)
  }, [])
}

const getMaxLength = list => {
  const maxNumber = Math.max(...list)
  return maxNumber.toString().length
}

const radixSortLsd = (list, index = 0, maxLength) => {
  const empties = [[],[],[],[],[],[],[],[],[],[]]
  maxLength = maxLength || getMaxLength(list)

  const buckets = list.reduce((buckets, number) => {
    const str = number.toString()
    const target = str.length - 1 - index
    const key = str[target] || 0
    buckets[key].push(number)
    return buckets
  }, empties)

  const flattened = [].concat.apply([], buckets)

  return (index < maxLength)
    ? radixSortLsd(flattened, index + 1, maxLength)
    : flattened
}

module.exports = {
  radixSortMsd,
  radixSortLsd,
}
