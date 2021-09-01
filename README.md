# react-native-Tinder-clone

## 制作手順

---

1. 環境構築

---

```
$ react-native init <プロジェクト名>

cd <プロジェクト名>
npx react-native run-ios
```

---

BottomBar 作成

---

アイコンを表示させ、タップした際に画面遷移させる実装

```
$ npm install react-native-vector-icons

cd ios
pod install
```

- TouchableOpacity 追加
- SafeAreaView 追加

エラー

- Unrecognized font family 'FontAwesome'
  <br>
  解決方法
  <br>
- Xcode から ios/xcodeproj を開く
- info.plist を開く
- 「Add Row」で項目を追加。
- 「Fonts provided by application」を Key に設定
- 「Resources」 というディレクトリにアイコンフォントが一式入っているので、使用したいフォントファイル名を「value」に追加する。
- 状態でビルドし直すことでフォントが読み込まれる。

[bash]
$ react-native run-ios
[/bash]
<br>

Navigation-画面遷移-

```
$ npm install @react-navigation/native-stack
$ npm install react-native-gesture-handler

cd ics
pod install
```
