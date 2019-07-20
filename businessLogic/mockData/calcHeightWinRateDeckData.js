// テスト用データ。
// ２つのデッキから構成。平均ランク2の鋭いエッジ＋ヤイバのマスター。平均ランク８の狙撃兵＋ゲリラ隊
export const apiResponse = [
  {
    date: '"2019-07-10T14:00:41.491Z"',
    ranking: 1,
    units: [
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 17
      }
    ],
    userId: 'AF7878FB-ACEA-41D9-BF94-9A52C7033D89'
  },
  {
    date: '"2019-07-03T12:13:31.050Z"',
    ranking: 3,
    units: [
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 17
      }
    ],
    userId: 'someOne'
  },
  {
    date: '"2019-07-18T14:29:27.355Z"',
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 6
      },
      {
        level: 2,
        unitId: 31
      }
    ],
    userId: '90F2EB8D-9A3F-4ADD-A003-5B16D2E835F2'
  },
  {
    date: '"2019-07-07T05:22:38.617Z"',
    ranking: 8,
    units: [
      {
        level: 2,
        unitId: 6
      },
      {
        level: 2,
        unitId: 31
      }
    ],
    userId: '90F2EB8D-9A3F-4ADD-A003-5B16D2E835F2'
  }
]

export const output1 = [
  {
    averageRanking: 2,
    units: [
      {
        level: 1,
        unitId: 3
      },
      {
        level: 1,
        unitId: 17
      }
    ]
  },
  {
    averageRanking: 8,
    units: [
      {
        level: 2,
        unitId: 6
      },
      {
        level: 2,
        unitId: 31
      }
    ]
  }
]
