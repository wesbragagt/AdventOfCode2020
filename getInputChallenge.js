require('dotenv').config()
const axios = require('axios').default
const getInputChallenge = async (day = 1, headers = {
  cookie: process.env.COOKIE
  }) => {
  try {
   const response = await axios.get(`https://adventofcode.com/2020/day/${day}/input`, {
      headers
    })
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports.getInputChallenge = getInputChallenge