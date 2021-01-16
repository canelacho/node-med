const { expect } = require('@jest/globals')
const sum = require('./sum')

test('Sumar 1 + 2 y dara 3 como resultado', () => {
  expect(sum(1,2)).toBe(3)
})

test('Sumar 2 + 2 y dara diferente de 3', () => {
  expect(sum(2,2)).not.toBe(3)
})

test('Sumar 2 + 2 y dara mayor a 3 como resultado', () => {
  expect(sum(2, 2)).toBeGreaterThan(3)
})