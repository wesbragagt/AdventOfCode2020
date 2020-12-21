const convertInputToNumbersArray = (str = '') => str.split(/\n/g).filter(e => e).map(e => Number(e))
module.exports.convertInputToNumbersArray = convertInputToNumbersArray