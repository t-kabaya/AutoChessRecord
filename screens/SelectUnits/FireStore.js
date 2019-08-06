import { db, dbKey } from '../../fireStore/fireStoreSetup'
import { Constants } from 'expo'
import { isValidRank, isValidUnits } from './BusinessLogic.ts'

export const saveMatchRecordToFireStore = async (units, ranking) => {
  // 異常データ
  if (isValidRank(ranking) || isValidUnits(units)) return false

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
