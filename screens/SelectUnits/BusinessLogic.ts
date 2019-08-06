type Unit = {
  unitId: number,
  level: number
}

export const isValidDeck = (units: any[], rank: number): any[] => {
  return units.some( unit => isValidUnit(unit)) && isValidRank(rank)
}

// rankは1 - 8の間でなければならない。 nullは不可
export const isValidRank = (ranking: number): boolean => 
  typeof ranking === 'number' && ranking >= 1 && ranking <= 8

// units = [{unitId: 7, level: 3}]のような感じ。
// 星が３以上と、1以下のユニット、unitIdがないユニットは弾く
export const isValidUnit = (unit: Unit): boolean => {
  if (unit == null) return false
  if (typeof unit.unitId !== 'number' || unit.unitId < 1) return false
  if (typeof unit.level !== 'number' || unit.level < 1 || unit.level > 3) return false

  return true
}

export const isValidUnits = (units: Unit[]): boolean => 
  units.some(unit => isValidUnit(unit))

