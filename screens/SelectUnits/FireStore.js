import { db, dbKey } from '../../fireStore/fireStoreSetup'
import { Constants } from 'expo'

// 順位は押さなくてもいい。
export const saveMatchRecordToFireStore = async (units, ranking) => {
  const unitDataToStore = units
    // unit
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
