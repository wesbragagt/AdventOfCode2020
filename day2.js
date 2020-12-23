/**
 * DAY 2
 */

const {getInputChallenge} = require('./getInputChallenge')
const convertStringListToArray = (str) => str.split('\n').filter(e => e)

const countLetters = (letter, str) => {
  const matches = str.match(new RegExp(letter, 'gmi'))
  if(!matches)return 0
  return matches.length
}
const makeRules = (str) =>{
  // finds the character count rule and letter
  const [ruleStr, input] = str.split(': ')
  const [charRule, letter] = ruleStr.split(' ')
  const [min, max] = charRule.split('-').map(e => Number(e))
  
  
  return {
    min,
    max,
    letter,
    input,
    get valid(){
      const instancesOfLetter = countLetters(this.letter, this.input)
      return instancesOfLetter >= this.min && instancesOfLetter <= this.max
    }
  }
}

getInputChallenge(2)
.then(convertStringListToArray)
.then(main)
.catch(error => console.log(error.message))

function main(input){
  const validPasswords = input.filter(e => {
    const rules= makeRules(e)
    return rules.valid
  })
  console.log({validPasswords: validPasswords.length, input: input.length})
}

