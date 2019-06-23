import { db } from "../../fireStore/fireStoreSetup";
import { calcWinRateRankingOfUnit } from "../calcHeighWinRateUnits";

// top3WinRate = そのユニットがデッキ内にいる時にtop3に入る確率。

const inputData = [
  {
    ranking: 1,
    units: [
      {
        level: 2,
        unitId: 1,
      },
      {
        level: 2,
        unitId: 2,
      },
    ],
  },
  {
    ranking: 3,
    units: [
      {
        level: 2,
        unitId: 3,
      },
      {
        level: 2,
        unitId: 4,
      },
    ],
  },
  {
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 5,
      },
      {
        level: 2,
        unitId: 6,
      },
    ],
  },
];

const output = [
  {
    unitId: 1,
    top3WinRate: 1,
  },
  {
    unitId: 2,
    top3WinRate: 1,
  },
  {
    unitId: 3,
    top3WinRate: 1,
  },
  {
    unitId: 4,
    top3WinRate: 1,
  },
  {
    unitId: 5,
    top3WinRate: 0,
  },
  {
    unitId: 6,
    top3WinRate: 0,
  },
];
/*------   calcWinRanknigOfUnit   ------*/

test("blackbox test calcWinRankingOfUnit", () => {
  const response = calcWinRateRankingOfUnit(inputData);
  expect(response).toEqual(output);
});

// unit id は重複していてはならない。
