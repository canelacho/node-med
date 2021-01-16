'use strict'

const assert = require('assert').strict

const add = (a, b) => a + b
const result = add(2,2)

assert.deepStrictEqual(typeof result, 'number')
assert.deepStrictEqual(result, 4)

assert(result == 5)

