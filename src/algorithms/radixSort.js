const emptyBuckets = (workingArray, buckets) => {
  workingArray.length = 0

  buckets.forEach(bucket => {
    if (bucket.length > 0) {
      workingArray.push(...bucket)
      bucket.length = 0
    }
  })
}

const getSignificantDigit = (item, power) => {
  const tenPower = Math.pow(10, power)
  return Math.floor(item / tenPower) % 10
}

module.exports = function radixSort(list) {
  const results = []
  const buckets = [[], [], [], [], [], [], [], [], [], []]
  const workingArray = [...list]

  let power = 0

  if (list.length <= 1) return workingArray

  while (workingArray.length > 0) {
    workingArray.forEach(item => {
      const digit = getSignificantDigit(item, power)

      if (item < Math.pow(10, power)) {
        results.push(item)
      } else {
        buckets[digit].push(item)
      }
    })

    power += 1
    emptyBuckets(workingArray, buckets)
  }

  return results
}
