# これは何？
「[モダン JavaScript の基本から始めるReact実践の教科書](https://www.sbcr.jp/product/4815610722/)」（岡田 拓巳著、SB Creative 出版）のための簡易APIサーバです。


# 使用法
## Dockerを使用する方法
`docker-compose up`
で起動できます。

## Dockerを使用せず、yarn を使用する方法
```
cd express-app
yarn install
yarn start
```

## React側ソースコードの変更点
このAPIを使用するためには、フロント側に記述しているエンドポイントを変更する必要があります。

`App.tsx`ファイルの`axios.get`関数に渡すURLを以下のように変更してください。

- P216のデータを取得したい場合：
http://localhost:5000/users/8-1

- P232のデータを取得したい場合：
http://localhost:5000/users/8-2

- P232のデータを取得したい場合：
http://localhost:5000/users/9

# 免責
簡易的なものなので、実用に耐えうるものではありません。ご了承ください。