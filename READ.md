[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=t-kabaya)](https://github.com/anuraghazra/github-readme-stats)


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
新キャラ２体追加
p12を使った証明書のマニュアルでの追加
chinese 対応
iosアプリをリリース。

selectUnitスクリーンの使い勝手を向上(種族ごとの洗濯、コインでの選択)
新しいユニット追加（イモータルアサシン、）
ユニットの名前をupdate。（後回し）

マイページのbusinessLogicの作成(main関数などを変更。)
<<<<<<< HEAD
=======
Sentryでバグ検知
fireStoreにセキュリティルール追加
一番最初にモーダルを追加。
save match buttonをマテリアルデザイン標準のボタンにして、説明を追加。
unitスクリーンを見やすく。  
selectunitスクリーンで種族によりフィルター
selectUnitスクリーンも多言語対応化
selectUnitスクリーンも日本語に直す。

>>>>>>> cf62d6ce7dafbf06ac607f82896b77857d2c6d6a
