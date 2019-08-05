export const removeAbnormalUnit = (units) => {
  return units
}

// rankは1 - 8の間でなければならない。 nullは不可
export const isValidRank = (ranking: number): boolean => (
  typeof ranking === 'number' && ranking >= 1 && ranking <= 8
)