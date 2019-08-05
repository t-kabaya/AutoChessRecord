import { db, dbKey } from '../../fireStore/fireStoreSetup'
import { Constants } from 'expo'
import { isValidDeck, isValidRank, isValidUnit } from './BusinessLogic.ts'

export const saveMatchRecordToFireStore = async (units, ranking) => {
  // 異常データ
  if (isValidRank(ranking)) return false
  if (units.some(unit => isValidUnit(unit))) return false

  try {
    db.collection(dbKey.matchRecord).add({
      userId: Constants.installationId,
      ranking,
      units,
      date: JSON.stringify(new Date())
    })
    return true
  } catch (e) {
    return false
  }
}
