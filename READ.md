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

## アーキテクチャ
ducksデザインパターンを参考にした独自アーキテクチャを採用
screen以下、画面に関連するファイルを一つのフォルダにまとめる。

以下が例
このことにより、抽象度を上げ過ぎることを防ぎ、かつ疎結合なコードを構築可能に。

MyPage - BusinessLogic.js
       - BusinessLogic.test.js
       - Screen.js
       - Screen.test.js

積極的にショートハンドを使う
props = P
styles = S