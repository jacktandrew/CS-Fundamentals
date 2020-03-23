const memoize = require('./memoize')

const getNthNumber = memoize(nth => {
  if (nth === 0) return 0
  if (nth === 1) return 1
  const number = getNthNumber(nth - 2) + getNthNumber(nth - 1)
  return number
})

const getSequence = (nth) => {
  const sequence = []
  let i = 0

  while (i <= nth) {
    sequence.push(getNthNumber(i))
    i++
  }

  return sequence
}

module.exports = {
  getNthNumber,
  getSequence,
}
