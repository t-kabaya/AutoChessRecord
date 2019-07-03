TODO:  
ここから丸い画像を取ってくる。
https://evolutionchess.github.io/mix.html

成功のトーストを綺麗にする。

ユニットの tier リストも必要だな。

勝率の高いデッキを並べる。
opUnitsScreen を作成する。(top3 率で、ユニットをランキングする。)

OPDeckScreen は、クラロワの opgg を参照。

## ランキングの作り方。
クライアントサイドジョイン万歳

勝率が高いデッキの判定
ranking が、1,2,3 / all が大きいデッキ。

勝率の高いユニットの判定
ranking が、1,2,3 / all の数が大きいユニット

where クエリを使う。
// Create a query against the co llection
var queryRef = citiesRef.where('ranking', '<=', 3);
自分のデッキだけ取ってくる方法に応用できそう。

opUnitsscreenでsortがfloatと一緒に使うとうまくいかない。

モックデータとシナジーを合わせる。

## TODO
english対応

戻る。
保存
戦績を記録
位