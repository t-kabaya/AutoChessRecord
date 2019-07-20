import { apiResponse, output1 } from '../mockData/calcHeightWinRateDeckData'

import { calcHighWinRateDeck } from '../calcHighWinRateDeck'

/* ------   calcWinRanknigOfUnit   ------ */

test('must return two object', () => {
  const response = calcHighWinRateDeck(apiResponse)

  expect(response).toEqual(output1)
})
