# これは何？
「[モダン JavaScript の基本から始めるReact実践の教科書](https://www.sbcr.jp/product/4815610722/)」（岡田 拓巳著、SB Creative 出版）に記載されていたコードを手元で動かすための簡易APIサーバです。

指定のURLにHTTP GETを行うと既定の json を返します。

# 使用法
1. 本APIサーバプログラムを起動します。
2. React側ソースコードのエンドポイント（URL）を変更します。

## Dockerを使用し起動する方法
`docker-compose up`
で起動できます。

## Dockerを使用せず、yarn を使用し起動する方法
```
cd express-app
yarn install
yarn start
```

## React側ソースコードを変更する
このAPIを使用するためには、フロント側に記述しているエンドポイントを変更する必要があります。

フロント側の`App.tsx`（または`App.jsx`）ファイルの`axios.get`関数に渡すURLを以下のように変更してください。

- P216のデータを取得したい場合：
http://localhost:5000/users/8-1

- P232のデータを取得したい場合：
http://localhost:5000/users/8-2

- P232のデータを取得したい場合：
http://localhost:5000/users/9

- エラーを起こしたい場合：
http://localhost:5000/users/hoge

（エラーを起こしたい場合は適当なURLでよいです。）

## フロント側のポート番号を3000番以外にしている場合
CORSのためフロントのURLを`http://localhost:3000`と指定しています。
もしフロント側のポート番号を変更するなどしていた場合は、`express-app/app.js`ファイルの`frontURL`変数を適切に変更してください。

# 免責
簡易的なものなので、実用に耐えうるものではありません。ご了承ください。
