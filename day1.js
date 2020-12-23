/**
 * --- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

const {getInputChallenge} = require('./getInputChallenge')
const {convertInputToNumbersArray} = require('./helper')

getInputChallenge(1)
.then(convertInputToNumbersArray)
.then(main)
.catch(error => console.log(error.message))

function main(input){
  const part1Answer = part1(input)
  const part2Answer = part2(input)
  console.log({part1Answer, part2Answer})
}

function part1(input){
  // remove duplicate values
  const uniqueValues = [...new Set(input)]
  const sorted = uniqueValues.sort((a, b) => a-b)
  const findPair = num => 2020 - num
  
  let pair = []
  for(let i = 0; i < sorted.length; i++){
    // quit the loop when those pairs are found
    if(pair.length === 2){
      break
    }
    const foundPair = sorted.indexOf(findPair(sorted[i]))
    foundPair !== -1 && pair.push(sorted[foundPair])
  }
  const answer = pair[0] * pair[1]
  return answer
}

function part2(arr){
  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {

    let indexB = indexA + 1;
    let indexC = arr.length - 1;
    // avoid duplicate values
    if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

    while (indexB < indexC ) {

      let sum = arr[indexA] + arr[indexB] + arr[indexC];

      if (sum < 2020) {
        indexB++;
      } else if (sum > 2020) {
        indexC--;
      } else {
        result.push(arr[indexA], arr[indexB], arr[indexC]);
        while (arr[indexB] === arr[indexB + 1]) indexB++;
        while (arr[indexC] === arr[indexC - 1]) indexC--
        indexB++;
        indexC--;
      }
    }
  }
  return result.reduce((acc, num) => acc *= num);
}