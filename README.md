# readme #

Illustratorで作成したデザインをスマホなどの実機でプレビューするために作った、個人的なgulpのプロジェクトです。

-----

### 更新履歴 ###

* 0.5.0：新規作成

-----

### インストール ###

Illustratorファイルと同階層にリポジトリをclone

```
$ cd (Illustratorファイルがあるディレクトリへのパス)
$ git clone https://github.com/gau/ai-preview.git
```

-----

### nodeモジュールのインストール ###

ai-previewフォルダに移動し、nodeモジュールをインストール


```
$ cd ai-preview
$ npm install
```

-----

### 起動 ###

nodeモジュールのインストールが終了したら、browser-syncを実行

```
$ npm start
```

-----

### 基本の使い方 ###

1. browser-syncを起動したあと、ウェブブラウザで`localhost:3000`にアクセスします。モバイル端末から確認するときは、「localhost」の部分をPCのIPへ変更したアドレスにアクセスすればOKです。
2. `ai-preview/source/images/`内へ`image.png`という名前でPNG画像入れます（上書きコピー）。
3. ブラウザの表示が自動更新されます。

-----

### PNG画像の書き出し用スクリプト ###

`ai-preview`の中にある`save_and_export_PNG24.jsx`は、Illustratorファイルの上書き保存とPNGの書き出しを同時に実行するIllustrator用スクリプトです。PNG画像は、Illustratorファイルと同階層にある`ai-preview/source/images/`内へ自動的に書き出しされます。この位置にフォルダがない場合は、画像の書き出しは実行されません。

-----

### ScriptKeyAiを併用する ###

ものかのさん作の`ScriptKeyAi`を使うと、スクリプトの実行にショートカットを割り当てることができます。`ScriptKeyAi`に`save_and_export_PNG24.jsx`を読み込み、`command`＋`S`のショートカットを割り当てることで、ドキュメントの保存ごとにPNG画像を所定の位置へ書き出すことが可能です。

[ScriptKeyAi | for Illustraor - ものかの](http://tama-san.com/scriptkey/)

-----

### その他 ###

* node、npm、gulp（グローバル）のインストールが必須です。
* あくまで私個人が使うために作ったものですので、環境によっては正常に動かないこともあります。
* `save_and_export_PNG24.jsx`はドキュメントを強制的に上書きしますのでご注意ください。16行目の`app.activeDocument.save();`をコメントアウトすることで、上書き保存を無効化することもできます。

-----

### 免責事項 ###

* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。

-----

### クレジット ###

* Copyright (c) 2015 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* [Graphic Arts Unit](http://www.graphicartsunit.com/)
* [Twitter](https://twitter.com/gautt)