export const calcWinRateRankingOfUnit = inputArray => {
  const resultArray = [];

  // ここの設計は考えたほうがいいな。
  // findIndexで返り値を取得して、
  inputArray.forEach(data => {
    data.units.forEach(unitsData => {
      if (resultArray.some(item => item.unitId === unitsData.unitId)) {
        const index = resultArray.findIndex(
          element => element.unitId === unitsData.unitId
        );
        // resultArray.push({
        //   unitId: unitsData.unitId,
        //   top3Count: data.ranking > 4,
        // });
        const isTop3 = data.ranking <= 3;
        resultArray[index] = {
          unitId: unitsData.unitId,
          top3Count: isTop3 ? resultArray[index] + 1 : resultArray[index],
          notTop3Count: isTop3 ? resultArray[index] : resultArray[index] + 1,
        };
      } else {
        resultArray.push({
          unitId: unitsData.unitId,
          top3Count: data.ranking > 3 ? 0 : 1,
          notTop3Count: data.ranking > 3 ? 1 : 0,
        });
      }
    });
  });

  const unitsOfTop3WinRate = resultArray.map(item => ({
    unitId: item.unitId,
    top3WinRate: item.top3Count / (item.top3Count + item.notTop3Count),
  }));

  // rankingSumから、実際のtop3率を計算する。

  return unitsOfTop3WinRate;
};
