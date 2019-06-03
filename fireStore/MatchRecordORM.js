import {db} from './fireStoreSetup'
import {Constants} from 'expo'

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
export const saveMatchRecordToFireStore = async(units, ranking) => {
  const unitDataToStore = units.filter(unit => !(unit.level === 0)).map(unit => ({unitId: unit.id, level: unit.level}))
  try {
    db.collection("matchRecord").add({
      userId: Constants.installationId,
      ranking: 3,
      units: unitDataToStore,
      date: new Date()
    })
  } catch (error) {
    throw new Error('error at saveMatchRecordToFireStore')
  }
}

export const getMyMatchRecord = async() => {
  console.log('error')
  const response = await db.collection('matchRecord').get()
  console.log(response)
  const myMatchRecord = await response
                          .docs
                          .map(item => item.data())
                          .filter(data => data.userId === Constants.installationId)
  console.log(myMatchRecord)
}