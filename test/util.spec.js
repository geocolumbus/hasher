const util = require('../src/util.js')
const assert = require('assert')

describe('Character Utilities', () => {

  it('lists lower case letters', () => {
    assert.equal(util.lowerCaseLetters().join(''),'abcdefghijklmnopqrstuvwxyz')
  })

  it('lists upper case letters', () => {
    assert.equal(util.upperCaseLetters().join(''),'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  })

  it('lists punctuation characters', () => {
    assert.equal(util.punctuationCharacters().join(''),'!"#$%&\'()*+,-.')
  })

  it('lists number characters', () => {
    assert.equal(util.numberCharacters().join(''),'0123456789')
  })

})