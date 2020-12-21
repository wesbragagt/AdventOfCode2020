const axios = require('axios').default

const getInputChallenge = async (day = 1) => {
  try {
   const response = await axios.get(`https://adventofcode.com/2020/day/${day}/input`, {
      headers: {
      cookie: '_ga=GA1.2.1329754918.1608577497; _gid=GA1.2.1315497310.1608577497; session=53616c7465645f5f29b87bdba7e39d6e16732636b913c73d5e240f88ec1ce1711eb4fd42dff9da0509411a1c09aeb8c5'
      }
    })
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports.getInputChallenge = getInputChallenge