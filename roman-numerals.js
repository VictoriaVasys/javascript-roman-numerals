function convertToOldRoman(num) {
  numeral = []
  addThousands(numeral, ((Math.floor((num / 1000) % 10)) % 5))
  addFiveHundred(numeral, (num - (num % 500)))
  addHundreds(numeral, ((Math.floor((num / 100) % 10)) % 5))
  addFifty(numeral, (num - (num % 50)))
  addTens(numeral, ((Math.floor((num / 10) % 10)) % 5))
  addFive(numeral,(num - (num % 5)))
  return addOnes(numeral,(num % 5))
}

function getOnes(num) {
  return "I".repeat(num)
}

function getTens(num) {
  return "X".repeat(num)
}

function getHundreds(num) {
  return "C".repeat(num)
}

function getThousands(num) {
  return "M".repeat(num)
}

function addOnes(base, num) {
  ones = getOnes(num)
  base.push(ones)
  return base.join('')
}

// function addNewOnes(base, num) {
//   if (num % 4 !== 0 || num % 6 !== 0) {
//     ones = getOnes(num)
//     base.push(ones)
//     return base.join('')
//   }
// }

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
  
function addFifty(base, num) {
  if (num % 100 !== 0) {
    base.push("L")
    return base.join('')
  }
}

function addHundreds(base, num) {
  hundreds = getHundreds(num)
  base.push(hundreds)
  return base.join('')
}

function addFiveHundred(base, num) {
  if (num % 1000 !== 0) {
    base.push("D")
    return base.join('')
  }
}

function addThousands(base, num) {
  
  thousands = getThousands(num)
  base.push(thousands)
  return base.join('')
}

function convertToNewRoman(num) {
  // numeral = []
  // addNewThousands(numeral, ((Math.floor((num / 1000) % 10)) % 5))
  // addFiveHundred(numeral, (num - (num % 500)))
  // addNewHundreds(numeral, ((Math.floor((num / 100) % 10)) % 5))
  // addFifty(numeral, (num - (num % 50)))
  // addNewTens(numeral, ((Math.floor((num / 10) % 10)) % 5))
  // addFive(numeral,(num - (num % 5)))
  // return addNewOnes(numeral,(num % 5))
}

module.exports = {
  convertToOldRoman,
  convertToNewRoman
}