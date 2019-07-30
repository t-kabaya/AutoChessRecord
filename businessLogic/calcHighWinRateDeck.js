import _ from 'lodash'

// apiResponseをreduceしてカウントしていけば良い。
// しかし、今回は試しに非関数志向でreduceを排除して書いてみる。

// averageRankでソートする。
// export const calcHighWinRateDeckList = notSortedHighWinRateDeckList => {
//   return _.sortBy(notSortedHighWinRateDeckList, x => x.averageRank)
// }

export const calcHighWinRateDeckList = apiResponse => {
  const highWinRateDeckList = []
  apiResponse.forEach(data => {
    const index = findIndexOfDeckFromHighWinRateDeckList(
      highWinRateDeckList,
      data.units
    )
    if (index === -1) {
      // デッキが存在していなかった場合
      highWinRateDeckList.push({
        totalSumOfRank: data.ranking,
        units: data.units,
        sumCount: 1
      })
    } else {
      // デッキが存在している場合
      // dataのindexを探す。
      const deck = highWinRateDeckList[index]
      // indexに対応するelementを書き換えた新しいarrayを作成
      highWinRateDeckList[index] = {
        totalSumOfRank: deck.totalSumOfRank + data.ranking,
        units: deck.units,
        sumCount: deck.sumCount + 1
      }
    }
  })

  return roundUpAndSortData(highWinRateDeckList)

  // 平均勝率を求め、小数点第二を四捨五入
  // averageRankでソート
  return removeRawAverageRankDeck(roundUpAndSortData(highWinRateDeckList))
}

// remove abnormal data, like units = null, ranknig = null
export const removeAbnormalDataFromRawApiResponse = rawApiResponse => {
  // ranknigが1-8の間であること
  const isCorrectRank = deck =>
    deck.ranking && deck.ranking >= 1 && deck.ranking <= 8
  // unitsの数が、8以上10以下であること。
  const isCorrectUnit = deck =>
    deck.units && deck.units.length >= 8 && deck.units.length <= 10

  const isCorrect = deck => isCorrectUnit(deck) && isCorrectRank(deck)

  return rawApiResponse.filter(isCorrect)
}

export const roundUpAndSortData = highWinRateDeckList => {
  const result = highWinRateDeckList.map(x => ({
    averageRank: Math.round((x.totalSumOfRank / x.sumCount) * 10) / 10,
    units: x.units
  }))

  return _.sortBy(result, x => x.averageRank)
}

// TODO: データ整形の前にこのvalidateを行いたい。（計算量削減）
export const removeRowAverageRankDeck = rawData => {
  // ユニット数が7以下は表示させない。
  // averageRankが、４以上のデッキは取り除く。
  const isAverageRankHigherThanFour = data => data.averageRank <= 3
  return rawData.filter(isAverageRankHigherThanFour)
}

// unitsという配列が渡された時に、その配列が、既存array of objectの中にあるか確認
// unitIdが、同じなら同じと見なす。uintIdの重複は許可しない。(保留)
// 鋭いエッジが２体いた場合は、１体とみなす。(保留)
// indexが見つからない時は-1を返す。
export const findIndexOfDeckFromHighWinRateDeckList = (deckList, deck) => {
  const unitIdsOfDeckList = deckList.map(x => x.units.map(y => y.unitId))
  const unitIdsOfDeck = deck.map(x => x.unitId)

  // orderを無視して比較。
  return unitIdsOfDeckList.findIndex(x =>
    _.isEqual(x.sort(), unitIdsOfDeck.sort())
  )
}
