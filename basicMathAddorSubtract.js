// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
    const regex = /plus/g
    const regex2 = /minus/g
    let newStr = str.replace(regex, "+")
    let newerStr = newStr.replace(regex2, "-")
    let evalString = eval(newerStr)
    return String(evalString)
  }