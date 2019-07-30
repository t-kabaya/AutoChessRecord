import {
  apiResponse,
  output1,
  isContainThisDeckInput1,
  calcHighWinRateDeckInput1,
  calcHighWinRateDeckOutput1
} from '../mockData/calcHeightWinRateDeckData'

import {
  calcHighWinRateDeckList,
  // sumDeckRankToCalcHighWinRateDeck,
  findIndexOfDeckFromHighWinRateDeckList,
  removeAbnormalDataFromRawApiResponse,
  removeRowAverageRankDeck
} from '../calcHighWinRateDeck'

/* ------   calcHighWinRateDeckList   ------ */

// test('return value must be sorted by averageRank', () => {
//   const result = calcHighWinRateDeckList(calcHighWinRateDeckInput1)
//   expect(result).toEqual(calcHighWinRateDeckOutput1)
// })

// /* ------   calcHeghWinRateDeckList   ------ */

test('must return correct value', () => {
  const response = calcHighWinRateDeckList(apiResponse)

  expect(response).toEqual(output1)
})

/* ------   findIndexOfDeckFromHighWinRateDeckList   ------ */
test('findIndexOfDeckFromHighWinRateDeckList must return 0', () => {
  const deck = [
    {
      level: 1,
      unitId: 3
    },
    {
      level: 1,
      unitId: 17
    }
  ]
  const output = findIndexOfDeckFromHighWinRateDeckList(
    isContainThisDeckInput1,
    deck
  )
  expect(output).toEqual(0)
})

/* ----------------  removeAbnormalDataFromRawApiResponse    ---------------- */
test('dont remove anything', () => {
  expect(removeAbnormalDataFromRawApiResponse(apiResponse)).toEqual(apiResponse)
})

/* ---------------------   removeRawAverageRankDeck   --------------------- */

test('must return black array', () => {
  const input = [{ averageRank: 6 }, { averageRank: 7 }, { averageRank: 8 }]
  expect(removeRowAverageRankDeck(input)).toEqual([])
})
