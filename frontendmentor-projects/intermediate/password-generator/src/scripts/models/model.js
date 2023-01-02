
const characters = {
  lowercase: [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ],
  uppercase: [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbols: ['#', '!', '$', '%', '&', '+', '@']
}

const strengths = {
  tooWeak: 6,
  weak: 10,
  medium: 15,
  strong: 20
}

function generateRandomIndex(max, min=0) {
  return Math.floor(Math.random()*(max-min)) + min
}

function generateCharacterList(selections) {
  let lst = []
  selections.forEach(s => {lst = lst.concat(characters[s])})
  return lst
}

export function generatePassword(selections, length) {
  const charList = generateCharacterList(selections)
  let password = ''
  for (let i=0; i<length; i++) {
    password += charList[generateRandomIndex(charList.length)]
  }
  return password
}

export function checkStrength(length) {
  let str = null;
  for (const s in strengths) {
    if (strengths[s] >= length) return s
    str = s
  }
  return str
}

