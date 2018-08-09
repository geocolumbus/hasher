const app = require('../src/app.js')
const assert = require('assert')

describe('App', () => {
  it('works', () => {
    assert.equal(app.add(1, 2), 3)
  })
})