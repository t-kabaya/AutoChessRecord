export const isValidDeck = (units: any[], rank: number): any[] => {
  
  return units.some( unit => isValidUnit(unit)) && isValidRank(rank)
}

// rankは1 - 8の間でなければならない。 nullは不可
export const isValidRank = (ranking: number): boolean => (
  typeof ranking === 'number' && ranking >= 1 && ranking <= 8
)

// units = [{unitId: 7, level: 3}]のような感じ。
// 星が３以上と、1以下のユニット、unitIdがないユニットは弾く
export const isValidUnit = (units: object): boolean => {
  if (units == null) return false
  if (typeof units.unitId !== 'number' || units.unitId < 1) return false
  if (typeof units.level !== 'number' || units.level < 1 || units.level > 3) return false

  return true
}
