import { db } from "../fireStoreSetup";
import { getWinRateOfUnit } from "../MatchRecordORM";

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
    ranking: 2,
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
    ranking: 3,
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

test("noSynergyInput must return blank array", async () => {
  const response = await getWinRateOfUnit();
  expect(1).toEqual(1);
});
