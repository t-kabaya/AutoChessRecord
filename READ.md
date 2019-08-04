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
Sentryでバグ検知
fireStoreにセキュリティルール追加
一番最初にアプリのチュートリアルモーダルを追加。
save match buttonをマテリアルデザイン標準のボタンにして、説明を追加。
unitスクリーンを見やすく。  
selectunitスクリーンで種族によりフィルター
selectUnitスクリーンも日本語に直す。

resetOnBlurと、modalを連携させる。[難しそう]
素敵なチュートリアル用の一枚モーダルを探す。
FlatListにkeyExtractorを付けておく。

selectUnitScreenの時は、tabを消す。
訂正グノシーのようなタブを作る。

初期レンダリングの時、アニメーションがうまく動かない。

TODO: バグが発生。
14行から38行の間にバグが発生し、例外が投げられている。
このバグとは別問題だが、rankingと、unitsが0またはnullの時の以上データを取り除く処理が必要

今日やること。
rankingと、unitsが０または、nullの時の以上データを取り除く

バグを直した。
もう少し、テストを追加してからdevelopにマージする。
その後、publishする。

## アーキテクチャ
ducksデザインパターンを参考にした独自アーキテクチャを採用
screen以下、画面に関連するファイルを一つのフォルダにまとめる。

以下が例
このことにより、抽象度を上げ過ぎることを防ぎ、かつ疎結合なコードを構築可能に。

MyPage - BusinessLogic.js
       - BusinessLogic.test.js
       - Screen.js
       - Screen.test.js
