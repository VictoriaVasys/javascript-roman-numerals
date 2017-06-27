const assert = require("chai").assert
const romanNumerals = require("../roman-numerals")

describe('Convert to Old Roman Numeral', () => {
  it('can convert a number less than 5 to old roman Numeral', () => {
    assert.equal(romanNumerals.convertToOldRoman(4), "IIII")
  })
  
  it('can convert 5 to old roman Numeral', () => {
    assert.equal(romanNumerals.convertToOldRoman(5), "V")
  })
  
  it('can convert a number between 5 & 10 to old roman Numeral', () => {
    assert.equal(romanNumerals.convertToOldRoman(6), "VI")
    assert.equal(romanNumerals.convertToOldRoman(9), "VIIII")
  })
  
  it('can convert a number between 10 & 49 to old roman Numeral', () => {
    // assert.equal(romanNumerals.convertToOldRoman(10), "X")
    assert.equal(romanNumerals.convertToOldRoman(12), "XII")
    assert.equal(romanNumerals.convertToOldRoman(15), "XV")
    assert.equal(romanNumerals.convertToOldRoman(17), "XVII")
    assert.equal(romanNumerals.convertToOldRoman(20), "XX")
    assert.equal(romanNumerals.convertToOldRoman(36), "XXXVI")
    assert.equal(romanNumerals.convertToOldRoman(44), "XXXXIIII")
  })
  
  it('can convert a number between 50 & 99 to old roman Numeral', () => {
    // assert.equal(romanNumerals.convertToOldRoman(10), "X")
    assert.equal(romanNumerals.convertToOldRoman(50), "L")
    assert.equal(romanNumerals.convertToOldRoman(55), "LV")
    assert.equal(romanNumerals.convertToOldRoman(78), "LXXVIII")
    assert.equal(romanNumerals.convertToOldRoman(92), "LXXXXII")
  })
})