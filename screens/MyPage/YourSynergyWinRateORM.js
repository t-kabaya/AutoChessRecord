import { db, dbKey } from '../../fireStore/fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../../constants/UnitData'
import calcSynergiesFromUnitIds from '../../businessLogic/calcSynergiesFromUnitIds'
import { calcWinRateRankingOfUnit } from '../OpUnits/OpUnits.businessLogic'
import { formatAverageRankOfSynergyOfMeAndAllUser } from './BusinessLogic'

export const getYourWinRateOfSynergy = async () => {
  const response = await db.collection(dbKey.matchRecord).get()
  const data = response.docs.map(doc => doc.data())

  return formatAverageRankOfSynergyOfMeAndAllUser(
    data,
    Constants.installationId
  )
}
