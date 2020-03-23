const memoize = fn => {
  const memo = {}

  return function() {
    const key = JSON.stringify(arguments)
    if (memo.hasOwnProperty(key)) return memo[key]
    const result = fn(...arguments)
    memo[key] = result
    return result
  }
}

module.exports = memoize
