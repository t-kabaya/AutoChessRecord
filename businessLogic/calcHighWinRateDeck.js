// apiResponseをreduceしてカウントしていけば良い。
// しかし、今回は試しに非関数志向でreduceを排除して書いてみる。

export const calcHighWinRateDeck = apiResponse => {
  const result = []
  apiResponse.forEach(data => {
    if (false) {
      // デッキがすでに存在していた場合
    } else {
      // デッキが、resultに存在していなかった場合
      result.push({ averageRank: data.ranking, units: data.units })
    }
  })

  return result
}
