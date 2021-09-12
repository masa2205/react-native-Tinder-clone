# Tinder-Clone

- [Tinder-Clone](#tinder-clone)
- [アプリ概要](#アプリ概要)
- [使用技術](#使用技術)
- [開発した背景](#開発した背景)
- [環境構築手順](#環境構築手順)
- [ディレクトリ構成](#ディレクトリ構成)

<br>

---
<a id="apri"></a>
# アプリ概要



マッチングアプリ『Tinder』のクローン
<br>
<br>
<img width="300" src="https://user-images.githubusercontent.com/65245621/132991554-470f4a72-ed78-4971-bd99-eeddefcbde0d.png">

---

<br>

<a id="use"></a>
# 使用技術

- JavaScript
- React Native CLI

---

<br>

<a id="background"></a>

# 開発した背景

React Nativeの学習を、実際のアプリ制作を通して進めようと考え、自分のスマホの中に何か参考になるアプリはないかと探していました。
<br>
TwitterやInstagram等のSNSアプリは王道すぎるなー、など思いながら続けて探していた時,
マッチングアプリの「Tinder」が目に止まりました。
<br>
直感で「あ、これ面白そう」と思い、アプリを開いてみると、なんともシンプルなUIで構成されている割に、指を画僧に置いて動かしてみると、画僧が指の行く方向へ画面上を自由且つ大胆に動き、左右にスワイプさせることができ、スワイプさせて画面から飛ばすと、後ろから新しい女の子の画像が現れ、また同じことの繰り返しが行われる。
<br>
<br>
これだ。
<br>
<br>
と、決断するまでに時間はいりませんでした。
<br>
他のアプリは上下左右のみへのスクロールの実装が多い中、TinderのこのUIはインパクトしかありませんでした。
<br>
王道を行くよりも、他とは違うものを作ってみたいという思いが掻き立てられたのが、開発に至る経緯になります。

<br>

---

<br>

<a id="kankyou"></a>
# 環境構築手順

1. **X Codeのインストール**
- App Storeからインストールします。
- Xcodeをインストールしたら、`Command Line Tools`を設定する必要があります。Xcodeを実行して上部のメニューで`Xcode > Preferences... > Locations`を押してCommand Line Toolsが設定されたか確認します。

<br>

2. **HomeBrewのインストール**
```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. **Node.jsのインストール**
```
$ brew install node
```
4. **Watchmanのインストール**
```
$ brew install watchman
```
5. **CocoaPodsのインストール**
```
$ sudo gem install cocoapods
```
6. **React Native CLIのインストール**
```
$ npm install -g react-native-cli
```
7. **JDKのインストール**
```
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
```
8. **アンドロイドスタジオのインストール**
<br>
下記のリンクを押してアンドロイドスタジオのサイトに移動して、インストールファイルをダウンロードします。
<br>

[アンドロイドスタジオ]( https://developer.android.com/studio)

<br>
<br>

9. **アンドロイドスタジオの設定**
<br>
<br>
アンドロイドスタジオを実行したら下記のような画面が確認できます。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998252-9a7e1353-3bc8-4022-a44b-a91b8e3f7954.png">
<br>
<br>
Nextボタンを押して次の画面に移動します。次の画面に移動したら下記のようにInstall Typeを設定する画面が出ます。Customを選択し、Nextボタンを押して次の画面に移動します。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998349-97ccbbea-f2d6-4de1-9319-b13395a67c08.png">
<br>
<br>
次の画面に移動したら、下記のようにSelect UI Theme画面が確認できます。自分が好きなテーマを選択してNextボタンを押して次に進めます。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998437-dc387ace-908b-4679-98cc-c4f02056e1de.png">
<br>
<br>
次の画面に移動したら、下記のようにSDK Components Setup画面が表示されます。Performance (Intel ® HAXM)とAndroid Virtual Deviceを選択してNextボタンを押してインストールを進めます。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998512-b5794d36-5c83-4867-90ba-5c8e9ae97970.png">
<br>
<br>
次の画面に移動したら、下記のようにEmulator Settings画面が見えます。特に修正することなくNextボタンを押して次の画面に進めます。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998568-9cc44d4a-14a9-4934-ab62-c640f32b8576.png">
<br>
<br>
次の画面からは手順に従いながら進めればアンドロイドスタジオの設定は終わります。
<br>
<br>

10.  **アンドロイドスタジオSDK設定**

<br>
<br>
右下の`Configure > SDK Manger`を選択してアンドロイドSDK設定画面に移動します
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998764-88c5af92-a29f-4bfb-9060-b3caa7337b0a.png">
<br>
<br>
上のような画面が見えたら、右下のShow Pacakge Detailsを選択します。そしてリストで下記の内容を探して選択します。
<br>
<br>

- Android SDK Platform 29
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image

<br>
<br>
全て選択したら右下のOKボタンを押して選択した内容をインストールします。
<br>
<br>

11.  **アンドロイドスタジオ環境変数設定**
<br>
<br>
次はアンドロイドスタジオを環境変数に登録します。環境変数を追加するため`~/.bash_profile`ファイルまたは、`~/.zshrc`ファイルを開いて下記の内容を追加します。
<br>
<br>

```
# export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_HOME=自分のアンドロイドSDKのディレクトリ/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

上のコードで自分のアンドロイドSDKのディレクトリを自分の環境に合わせて修正します。自分のアンドロイドSDKのディレクトリが分からない場合、アンドロイドスタジオSDKを設定する画面に移動します。
<br>
<br>
<img width="600" src="https://user-images.githubusercontent.com/65245621/132998977-b62e1129-bcbd-491b-a484-8fec40054999.png">
<br>
<br>
アンドロイドスタジオSDKを設定する画面の一番上部を見るとAndroid SDK Locationの項目で自分のアンドロイドSDKのディレクトリが確認できます。

このように環境変数を設定したら、ターミナルを再起動して下記のコマンドを実行して見ます。

<br>

```
$ adb
```

<br>

環境変数にアンドロイドSDKがうまく設定されたら、下記のような結果が確認できます。

<br>

```
Android Debug Bridge version 1.0.41
Version 29.0.1-5644136
Installed as /自分のアンドロイドSDKのディレクトリ/platform-tools/adb
```

<br>

12. **react-nativeプロジェクトの生成**
```
$ npx react-native init ファイル名
```
13. **iOSでの確認**
```
$ cd SampleApp
$ npm run ios
```
14. **アンドロイドでの確認**
```
$ cd SampleApp
$ npm run android
```

<br>

以上でreact-nativeの環境構築は完了です。

<br>

---

<br>

<a id="directory"></a>
# ディレクトリ構成

```
├── assets
│   ├── data
│   │    └── users.js
│   └── imagees
│        ├── LIKE.png
│        └── nope.png
├── src
│   ├── components
│   │    ├── ImageBottomBar.js
│   │    └── MainImage.js
│   ├── navigation
│   │    └── AppNavigator.js
│   └── screens
│        ├── ChatScreen.js
│        ├── HomeScreen.js
│        ├── LikeKeepScreen.js
│        └── ProfileScreen.js
├── store
│   ├── actions
│   │    └── users.js
│   ├── reducers
│   │    └── users.js
│   └── index.js
└── App.js
```