# Emo-Lan Playground

このプロジェクトは、絵文字でHTMLを生成できるプログラミング言語 [Emo-Lan](https://github.com/ryokatsuse/emo-lan) のオンラインPlaygroundです。Next.jsで構築されており、WebAssemblyを通じてRustで実装されたEmo-Lanコンパイラーと連携しています。

## 概要

Emo-Lanは、絵文字を使ってHTMLを生成する独自のプログラミング言語です。このPlaygroundでは、ブラウザ上で直接Emo-Lanのコードを書いて実行結果を確認することができます。

### 主な機能

- 📝 ブラウザ上でEmo-Lanコードの編集
- ⚡ リアルタイムでのHTML生成

### 使用例

```
📄🔤こんにちは、世界！🔤🖼️(https://example.com/image.jpg)
```

上記のコードは以下のようなHTMLに変換されます：

```html
<!DOCTYPE html>
<html>
<body>
<p>こんにちは、世界！</p>
<img src="https://example.com/image.jpg" alt="Image" />
</body>
</html>
```

## 開発環境のセットアップ

```bash

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000)にアクセスしてPlaygroundを確認できます。


## ライセンス

MITライセンスの下で公開されています。


