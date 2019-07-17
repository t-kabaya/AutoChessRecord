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

opUnitsscreen で sort が float と一緒に使うとうまくいかない。

モックデータとシナジーを合わせる。

## TODO

english 対応

expo 33 対応(expo installコマンドを試す。)
新キャラ２体追加
p12を使った証明書のマニュアルでの追加
dev環境のデータベース作成
chinese 対応
iosアプリをリリース。

selectUnitスクリーンの使い勝手を向上
新しいユニット追加（イモータルアサシン、）
ユニットの名前を変更。（後回し）
synergyの画像を追加

マイページのbusinessLogicの作成(main関数などを変更。)
マイページで、実際のデータが参照されるように変更。



