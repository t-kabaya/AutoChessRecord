export const calcWinRateRankingOfUnit = inputArray => {
  // temporaryなarray。要リファクタリング
  const mArray = [];

  // ここの設計は考えたほうがいいな。
  // findIndexで返り値を取得して、
  inputArray.forEach(data => {
    data.units.forEach(unitsData => {
      const index = mArray.findIndex(x => x.unitId === unitsData.unitId);
      // findIndexでは、indexが見つからなかった場合は、-1が帰る
      if (index >= 0) {
        const isTop3 = data.ranking <= 3;
        mArray[index] = {
          unitId: unitsData.unitId,
          top3Count: isTop3
            ? mArray[index].top3Count + 1
            : mArray[index].top3Count,
          notTop3Count: isTop3
            ? mArray[index].notTop3Count
            : mArray[index].notTop3Count + 1,
        };
      } else {
        const isTop3 = data.ranking <= 3;
        mArray.push({
          unitId: unitsData.unitId,
          top3Count: isTop3 ? 1 : 0,
          notTop3Count: isTop3 ? 0 : 1,
        });
      }
    });
  });

  const unitsOfTop3WinRate = mArray.map(item => {
    // 3位率 = 3位の数 / 全体の数
    const top3WinRate = item.top3Count / (item.top3Count + item.notTop3Count);
    // 小数点第３位を丸める。
    const roundUpTop3WinRate = Math.round(top3WinRate * 1000) / 1000;
    return {
      unitId: item.unitId,
      top3WinRate: roundUpTop3WinRate,
    };
  });

  // rankingSumから、実際のtop3率を計算する。

  return unitsOfTop3WinRate;
};
