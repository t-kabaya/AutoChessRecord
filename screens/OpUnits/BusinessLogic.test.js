import { calcWinRateRankingOfUnit } from '../../screens/OpUnits/BusinessLogic'

// top3WinRate = そのユニットがデッキ内にいる時にtop3に入る確率。

const input1 = [
  {
    ranking: 1,
    units: [
      {
        level: 2,
        unitId: 1
      },
      {
        level: 2,
        unitId: 2
      }
    ]
  },
  {
    ranking: 3,
    units: [
      {
        level: 2,
        unitId: 3
      },
      {
        level: 2,
        unitId: 4
      }
    ]
  },
  {
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 5
      },
      {
        level: 2,
        unitId: 6
      }
    ]
  }
]

const output1 = [
  {
    unitId: 1,
    top3WinRate: 1
  },
  {
    unitId: 2,
    top3WinRate: 1
  },
  {
    unitId: 3,
    top3WinRate: 1
  },
  {
    unitId: 4,
    top3WinRate: 1
  },
  {
    unitId: 5,
    top3WinRate: 0
  },
  {
    unitId: 6,
    top3WinRate: 0
  }
]
/* ------   calcWinRanknigOfUnit   ------ */

test('blackbox test calcWinRankingOfUnit', () => {
  const response = calcWinRateRankingOfUnit(input1)
  expect(response).toEqual(output1)
})

const input2 = [
  {
    ranking: 1,
    units: [
      {
        level: 2,
        unitId: 1
      }
    ]
  },
  {
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 1
      }
    ]
  },
  {
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 1
      }
    ]
  }
]

const output2 = [
  {
    unitId: 1,
    top3WinRate: 0.333
  }
]

// top3winRateの小数点第２位は切り上げであること
// 0.3333を0.334に丸める
test('round up to the 2 decimal places', () => {
  const response = calcWinRateRankingOfUnit(input2)
  expect(response).toEqual(output2)
})
