import { db } from "../fireStoreSetup";
import { getWinRateOfUnit } from "../MatchRecordORM";

test("noSynergyInput must return blank array", async () => {
  const response = await getWinRateOfUnit();
  expect(response).toEqual([]);
});
