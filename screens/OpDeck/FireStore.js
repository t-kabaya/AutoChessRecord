import { db, dbKey } from '../../fireStore/fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../../constants/UnitData'
import calcSynergiesFromUnitIds from '../../businessLogic/calcSynergiesFromUnitIds'
import { en } from '../../constants/I18n'
import { calcWinRateRankingOfUnit } from '../OpUnits/BusinessLogic'
import { calcHighWinRateDeckList } from './BusinessLogic'

// 設計
// record table
// ranking 1から10
// userId: string
// units: [
//   {
//     id: 7,
//     level: 2
//   }
// ]

// 順位は押さなくてもいい。
export const saveMatchRecordToFireStore = async (units, ranking) => {
  const unitDataToStore = units
    .filter(unit => !(unit.level === 0))
    .map(unit => ({ unitId: unit.unitId, level: unit.level }))
  try {
    db.collection(dbKey.matchRecord).add({
      userId: Constants.installationId,
      ranking: ranking,
      units: unitDataToStore,
      date: JSON.stringify(new Date())
    })
  } catch (error) {
    throw new Error('error at saveMatchRecordToFireStore')
  }
}

export const getMyMatchRecord = async () => {
  // 開発のため、モックデータを使用する。
  // return mockDataOfOpDeck

  try {
    const response = await db.collection(dbKey.matchRecord).get()
    const data = response.docs.map(doc => doc.data())
    const highWinRateDeck = calcHighWinRateDeckList(data)
    return highWinRateDeck.map(record => {
      const synergy = calcSynergiesFromUnitIds(record.units)

      return { ...record, synergy }
    })
  } catch (error) {
    console.log('error')
  }
}

// top3率が高いユニットを示す。
export const getWinRateOfUnits = async () => {
  const response = await db.collection(dbKey.matchRecord).get()
  const data = response.docs.map(doc => doc.data())

  const top3WinRateOfUnits = calcWinRateRankingOfUnit(data)

  return top3WinRateOfUnits
}

const mockDataOfOpDeck = [
  // アサシンパンダ
  {
    top3WinRateOfDeck: '67.3',
    date: '"2019-06-16T07:33:36.358Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 16
      },
      {
        level: 1,
        unitId: 12
      },
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 11
      },
      {
        level: 1,
        unitId: 14
      },
      {
        level: 1,
        unitId: 32
      },
      {
        level: 1,
        unitId: 37
      },
      {
        level: 1,
        unitId: 45
      },
      {
        level: 1,
        unitId: 50
      }
    ],
    userId: '1802A72F-12B4-4EA7-86E1-D6BDFA60F5A2',
    synergy: [
      { synergy: en.assassin, synergyLevel: 6 },
      { synergy: en.panda, synergyLevel: 3 },
      { synergy: en.walker, synergyLevel: 1 }
    ]
  },
  // シージェ６,
  {
    top3WinRateOfDeck: '63.3',
    date: '"2019-06-16T14:16:57.161Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 9
      },
      {
        level: 1,
        unitId: 23
      },
      {
        level: 1,
        unitId: 27
      },
      {
        level: 1,
        unitId: 19
      },
      {
        level: 2,
        unitId: 49
      },
      {
        level: 1,
        unitId: 52
      },
      {
        level: 1,
        unitId: 18
      },
      {
        level: 1,
        unitId: 51
      },
      {
        level: 1,
        unitId: 46
      },
      {
        level: 1,
        unitId: 41
      }
    ],
    userId: '1802A72F-12B4-4EA7-86E1-D6BDFA60F5A2',
    synergy: [
      { synergy: en.mech, synergyLevel: 4 },
      { synergy: en.blaster, synergyLevel: 3 },
      { synergy: en.siegeBreaker, synergyLevel: 6 },
      { synergy: en.immortal, synergyLevel: 2 },
      { synergy: en.kraken, synergyLevel: 2 },
      { synergy: en.walker, synergyLevel: 1 }
    ]
  },
  {
    top3WinRateOfDeck: '60.6',
    date: '"2019-06-16T07:33:36.358Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 6
      },
      {
        level: 1,
        unitId: 23
      },
      {
        level: 1,
        unitId: 35
      },
      {
        level: 1,
        unitId: 21
      },
      {
        level: 1,
        unitId: 31
      },
      {
        level: 1,
        unitId: 44
      },
      {
        level: 1,
        unitId: 18
      },
      {
        level: 1,
        unitId: 41
      },
      {
        level: 1,
        unitId: 49
      }
    ],
    userId: '1802A72F-12B4-4EA7-86E1-D6BDFA60F5A2',
    synergy: [
      { synergy: en.marine, synergyLevel: 4 },
      { synergy: en.immortal, synergyLevel: 2 },
      { synergy: en.longShot, synergyLevel: 3 },
      { synergy: en.specialist, synergyLevel: 2 },
      { synergy: en.siegeBreaker, synergyLevel: 3 },
      { synergy: en.rapter, synergyLevel: 2 },
      { synergy: en.walker, synergyLevel: 1 }
    ]
  }
]
