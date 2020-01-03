const palindrome = require('../utils/for_testing').palindrome

test('palndrome of a', () => {
  const result = palindrome('a')
  expect(result).toBe('a')
})

test('palndrome of react', () => {
  const result = palindrome('react')
  expect(result).toBe('tcaer')
})

test('palndrome of releveler', () => {
  const result = palindrome('releveler')
  expect(result).toBe('releveler')
})