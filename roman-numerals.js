function convertToOldRoman(num) {
  numeral = []
  if (num / 50 >= 1 && num % 50 >= 0) {
    addTens(numeral, (Math.floor((num / 10) % 10)))
    addFive(numeral,(num - (num % 5)))
    return addOnes(numeral,(num % 5))
  } else if (num / 10 >= 1 && num % 10 >= 0) {
    addTens(numeral, (Math.floor((num / 10) % 10)))
    addFive(numeral,(num - (num % 5)))
    return addOnes(numeral,(num % 5))
  } else if (num / 5 >= 1 && num % 5 >= 0) {
    addFive(numeral)
    return addOnes(numeral,(num % 5))
  } else if (num / 5 < 1) {
    return getOnes(num)
  }
}

function getOnes(num) {
  return "I".repeat(num)
}

function getTens(num) {
  return "X".repeat(num)
}

function addOnes(base, num) {
  ones = getOnes(num)
  base.push(ones)
  return base.join('')
}

function addFive(base, num) {
  if (num % 10 !== 0) {
    base.push("V")
    return base.join('')
  }
}

function addTens(base, num) {
  tens = getTens(num)
  base.push(tens)
  return base.join('')
}

function convertToNewRoman(num) {
  return "blah"
}

module.exports = {
  convertToOldRoman
}