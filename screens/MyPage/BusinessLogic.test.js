import mockInput from '../../businessLogic/mockData/calcYourSynergyWinRate'
import { synergyEnum } from '../../constants/synergyData'

import calcYourSynergyWinRate, {
  convertFromUnitIdsToSynergyWithRanking,
  convertFromUnitIdsToSynergy,
  calcAverageRankOfSynergy,
  formatAverageRankOfSynergyOfMeAndAllUser
} from './calcYourSynergyWinRate'

/* -------------------- formatAverageRankOfSynergyOfMeAndAllUser --------------------- */

// test('must return correctValue', () => {

//   expect().toEqual(false)
// })

/* ------   calcYourSynergyWinRate   ------ */

test('response keys must have all synergy', () => {
  const output = [
    {
      synergy: synergyEnum.assassin,
      averageRank: 4.5,
      playCount: 2
    },
    {
      synergy: synergyEnum.puppet,
      averageRank: 4.5,
      playCount: 2
    },
    {
      synergy: synergyEnum.psyker,
      averageRank: 1,
      playCount: 1
    },
    {
      synergy: synergyEnum.supporter,
      averageRank: 1,
      playCount: 1
    },
    {
      synergy: synergyEnum.beast,
      averageRank: 8,
      playCount: 1
    },
    {
      synergy: synergyEnum.vanguard,
      averageRank: 8,
      playCount: 1
    }
  ]
  expect(calcYourSynergyWinRate(mockInput)).toEqual(
    expect.arrayContaining(output)
  )
})

/* ------   convertFromUnitIdsToSynergyWithRanking   ------ */

test('mustCountUpTotalCount from array', () => {
  const input = mockInput
  const output = [
    { rank: 1, synergy: 'assassin' },
    { rank: 1, synergy: 'puppet' },
    { rank: 1, synergy: 'supporter' },
    { rank: 1, synergy: 'psyker' },
    { rank: 8, synergy: 'vanguard' },
    { rank: 8, synergy: 'beast' },
    { rank: 8, synergy: 'assassin' },
    { rank: 8, synergy: 'puppet' }
  ]
  // const output = [
  //   {
  //     synergy: synergyEnum.assassin,
  //     sumOfRank: 9,
  //     sumCount: 2
  //   },
  //   {
  //     synergy: synergyEnum.puppet,
  //     sumOfRank: 9,
  //     sumCount: 2
  //   },
  //   {
  //     synergy: synergyEnum.psyker,
  //     sumOfRank: 1,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.supporter,
  //     sumOfRank: 1,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.vanguard,
  //     sumOfRank: 8,
  //     sumCount: 1
  //   },
  //   {
  //     synergy: synergyEnum.beast,
  //     sumOfRank: 8,
  //     sumCount: 1
  //   }
  // ]
  expect(convertFromUnitIdsToSynergyWithRanking(input)).toEqual(output)
})

/* ------   convertFromUnitIdsToSynergy   ------ */

test('convertFromUnitIdsToSynergy', () => {
  const input1 = [
    // 鋭いエッジ、アサシン、パペット
    {
      level: 1,
      unitId: 3
    },
    // 歌手、サイカー、サポーター
    {
      level: 1,
      unitId: 4
    }
  ]
  const output1 = [
    synergyEnum.assassin,
    synergyEnum.puppet,
    synergyEnum.supporter,
    synergyEnum.psyker
  ]
  const input2 = [
    // 酸の歯、ビースト、ヴァンガード
    {
      level: 1,
      unitId: 2
    },
    // 鋭いエッジ、アサシン、パペット
    {
      level: 1,
      unitId: 3
    }
  ]
  const output2 = [
    synergyEnum.vanguard,
    synergyEnum.beast,
    synergyEnum.assassin,
    synergyEnum.puppet
  ]

  expect(convertFromUnitIdsToSynergy(input1)).toEqual(output1)

  expect(convertFromUnitIdsToSynergy(input2)).toEqual(output2)
})

/* -------------------- calcAverageRankOfSynergy --------------------- */

test('calcAverageRankOfSynergy must return correct value', () => {
  const input = [
    { rank: 1, synergy: 'assassin' },
    { rank: 1, synergy: 'puppet' },
    { rank: 1, synergy: 'supporter' },
    { rank: 1, synergy: 'psyker' },
    { rank: 8, synergy: 'vanguard' },
    { rank: 8, synergy: 'beast' },
    { rank: 8, synergy: 'assassin' },
    { rank: 8, synergy: 'puppet' }
  ]
  const output = [
    {
      synergy: synergyEnum.assassin,
      averageRank: 4.5,
      playCount: 2
    },
    {
      synergy: synergyEnum.puppet,
      averageRank: 4.5,
      playCount: 2
    },
    {
      synergy: synergyEnum.psyker,
      averageRank: 1,
      playCount: 1
    },
    {
      synergy: synergyEnum.supporter,
      averageRank: 1,
      playCount: 1
    },
    {
      synergy: synergyEnum.beast,
      averageRank: 8,
      playCount: 1
    },
    {
      synergy: synergyEnum.vanguard,
      averageRank: 8,
      playCount: 1
    }
  ]
  // 配列の順列を無視するために、expect.arrayContainingを使った。
  // もっと簡単な方法を見つけたらリファクタリング。
  expect(calcAverageRankOfSynergy(input)).toEqual(
    expect.arrayContaining(output)
  )
})
