import { db, dbKey } from './fireStoreSetup'
import { Constants } from 'expo'
import unitData from '../constants/UnitData'
import calcSynergiesFromUnitIds from '../utils/calcSynergiesFromUnitIds'
import { calcWinRateRankingOfUnit } from '../businessLogic/calcHeighWinRateUnits'
import { formatAverageRankOfSynergyOfMeAndAllUser } from '../businessLogic/calcYourSynergyWinRate'

export const getYourWinRateOfSynergy = async () => {
  const response = await db.collection(dbKey.matchRecord).get()
  const data = response.docs.map(doc => doc.data())

  return formatAverageRankOfSynergyOfMeAndAllUser(
    data,
    Constants.installationId
  )
}
