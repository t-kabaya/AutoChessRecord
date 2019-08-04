import {
  apiResponse,
  output1,
  isContainThisDeckInput1,
  calcHighWinRateDeckInput1,
  calcHighWinRateDeckOutput1
} from '../../businessLogic/mockData/calcHeightWinRateDeckData'

import {
  calcHighWinRateDeckList,
  // sumDeckRankToCalcHighWinRateDeck,
  findIndexOfDeckFromHighWinRateDeckList,
  removeAbnormalDataFromRawApiResponse,
  removeRowAverageRankDeck,
  roundUpAndSortData
} from './BusinessLogic'

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
test('must retrun []', () => {
  // 入力値はユニットの数が全て7以下なので[]を返さなくてはいけないs
  expect(removeAbnormalDataFromRawApiResponse(apiResponse)).toEqual([])
})

/* ---------------------   removeRawAverageRankDeck   --------------------- */

test('must return []', () => {
  const input = [{ averageRank: 6 }, { averageRank: 7 }, { averageRank: 8 }]
  expect(removeRowAverageRankDeck(input)).toEqual([])
})

test('dont remove', () => {
  const input = [{ averageRank: 1 }, { averageRank: 2 }, { averageRank: 3 }]
  expect(removeRowAverageRankDeck(input)).toEqual(input)
})

/* ---------------------   roundupAndSortData   --------------------- */

test('must round up to 2decimal', () => {
  const input = [
    { averageRank: 2.2345, units: [] },
    { averageRank: 1.25, units: [] }
  ]
  const output = [
    { averageRank: 1.3, units: [] },
    { averageRank: 2.2, units: [] }
  ]
  expect(roundUpAndSortData(input)).toEqual(output)
})
