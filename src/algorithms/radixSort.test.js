const { radixSortMsd, radixSortLsd } = require('./radixSort')

describe('radixSort', () => {

  const numbers = [8, 1000, 55, 88, 12, 9, 255]

  test('should sort words with radixSortMsd', () => {
    const words = ['angel', 'cut', 'bone', 'ax', 'a', 'an', 'bat', 'cargo', 'apple']
    const sorted = ['a', 'an', 'angel', 'apple', 'ax', 'bat', 'bone', 'cargo', 'cut']
    expect(radixSortMsd(words)).toMatchObject(sorted)
  })

  test('should sort numbers with radixSortLsd', () => {
    const numbers = [8, 1000, 55, 88, 12, 9, 255]
    const sorted = [8, 9, 12, 55, 88, 255, 1000]
    expect(radixSortLsd(numbers)).toMatchObject(sorted)
  })
})
