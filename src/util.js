const lowerCaseLetters = () => {
  let res = []
  for (let n = 97; n < 123; n++) {
    res.push(String.fromCharCode(n))
  }
  return res
}

const upperCaseLetters = () => {
  let res = []
  for (let n = 65; n < 91; n++) {
    res.push(String.fromCharCode(n))
  }
  return res
}

const punctuationCharacters = () => {
  let res = []
  for (let n = 33; n < 47; n++) {
    res.push(String.fromCharCode(n))
  }
  return res
}

const numberCharacters = () => {
  let res = []
  for (let n = 48; n < 58; n++) {
    res.push(String.fromCharCode(n))
  }
  return res
}

exports.lowerCaseLetters = lowerCaseLetters
exports.upperCaseLetters = upperCaseLetters
exports.punctuationCharacters = punctuationCharacters
exports.numberCharacters = numberCharacters

