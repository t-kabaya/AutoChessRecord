import _ from 'lodash'

// apiResponseをreduceしてカウントしていけば良い。
// しかし、今回は試しに非関数志向でreduceを排除して書いてみる。

export const calcHighWinRateDeck = apiResponse => {
  const result = []
  apiResponse.forEach(data => {
    if (isContainThisDeck()) {
      // デッキがすでに存在していた場合
    } else {
      // デッキが、resultに存在していなかった場合
      result.push({ averageRank: data.ranking, units: data.units })
    }
  })

  return result
}

// unitsという配列が渡された時に、その配列が、既存array of objectの中にあるか確認
// unitIdが、同じなら同じと見なす。uintIdの重複は許可しない。(保留)
// 鋭いエッジが２体いた場合は、１体とみなす。(保留)
export const isContainThisDeck = (deckList, deck) => {
  // [[3, 17], [6, 13]]
  const unitIdsOfDeckList = deckList.map(x => x.units.map(y => y.unitId))
  const unitIdsOfDeck = deck.map(x => x.unitId)

  // orderを無視して比較。
  return unitIdsOfDeckList.some(x => _.isEqual(x.sort(), unitIdsOfDeck.sort()))
}
