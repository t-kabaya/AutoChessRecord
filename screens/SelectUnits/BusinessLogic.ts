export const removeAbnormalUnit = (units) => {
  return units
}

// rankは1 - 8の間でなければならない。 nullは不可
export const isValidRank = (ranking: number): boolean => (
  typeof ranking === 'number' && ranking >= 1 && ranking <= 8
)

// units = [{unitId: 7, level: 3}]のような感じ。
// 星が３以上と、1以下のユニット、untisIdがないユニットは弾く
export const isValidUnits = (units: object[]): boolean => {
  if (units == null) return
  return false
}
