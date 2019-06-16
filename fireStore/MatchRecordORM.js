import { db } from './fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../constants/UnitData'
import calcSynergiesFromUnitIds from '../utils/calcSynergiesFromUnitIds'

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
    db.collection('matchRecord').add({
      userId: Constants.installationId,
      ranking: 3,
      units: unitDataToStore,
      date: JSON.stringify(new Date())
    })
  } catch (error) {
    throw new Error('error at saveMatchRecordToFireStore')
  }
}

export const getMyMatchRecord = async () => {
  // 開発のため、モックデータを使用する。
  return mockDataOfOpDeck

  try {
    const response = await db.collection('matchRecord').get()
    const myMatchRecord = await response.docs
      .map(item => item.data())
      .filter(data => data.userId === Constants.installationId)

    // const myMatchRecordHasImage = myMatchRecord.map(record => ({...record, }))
    // ここに、シナジーなどを計算する処理を書いていくが、また後日追加する。
    const myMatchRecordWithSynergyLevel = myMatchRecord.map(record => {
      const synergy = calcSynergiesFromUnitIds(record.units)
      debugger

      return { ...record, synergy }
    })
    debugger
    return myMatchRecordWithSynergyLevel
  } catch (error) {
    console.log('error')
  }
}

const mockDataOfOpDeck = [
  {
    date: '"2019-06-16T14:16:57.161Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 2
      },
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 4
      },
      {
        level: 1,
        unitId: 5
      },
      {
        level: 2,
        unitId: 6
      },
      {
        level: 1,
        unitId: 7
      }
    ],
    userId: '1802A72F-12B4-4EA7-86E1-D6BDFA60F5A2',
    synergy: [
      {
        synergyLevel: 2,
        synergy: 'marine'
      },
      {
        synergyLevel: 2,
        synergy: 'psyker'
      },
      {
        synergyLevel: 2,
        synergy: 'supporter'
      }
    ]
  },
  {
    date: '"2019-06-16T07:33:36.358Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 2
      },
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 4
      },
      {
        level: 1,
        unitId: 6
      }
    ],
    userId: '1802A72F-12B4-4EA7-86E1-D6BDFA60F5A2',
    synergy: []
  }
]
