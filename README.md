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
<br>

---

### ImageBottomBar 作成

---

<br>

アプリ内下部にアイコンを配置し、アイコンをタップした際にそれぞれの画面へ遷移するように実装しました。
<br>
遷移先はアイコン左から
- HomeScreen(ホーム画面)
- LikeKeepScreen(Likeした女性の一覧画面)
- ChatScreen(チャット画面)
- ProfileScreen(自身のプロフィール画面)
<br>

上記4つになります。

<br>

<手順>

アイコンを表示させるために`vector-icons`ライブラリーを追加し、`FontAwesome`で設定しました。

`vector-icons`ライブラリーのインストール、使用手順は

```
$ npm install react-native-vector-icons

cd ios
pod install

+ import Icon from 'react-native-vector-icons/FontAwesome';
```
となります。
<br>
後々のreact-nativeのライブラリーインストール、使用手順は上記と変わらないので、下記では割愛致します。

<br>

```js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ImageBottomBar = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
          <Icon name="refresh" color="yellow" size={30} style={styles.icon} />
          <Icon name="times" color="#F06795" size={50} style={styles.icon} />
          <Icon name="star" color="blue" size={30} style={styles.icon} />
          <Icon name="heart" color="#64EDCC" size={40} style={styles.icon} />
          <Icon name="bolt" color="violet" size={30} style={styles.icon} />
      </View>
    </View>
  );
};

```

Iconタグを指定し上記のようにコードを編集しましたが、エラーが出てIconがうまく表示されませんでした。
<br>
エラーの内容をみてみると
<br>
```
Unrecognized font family 'FontAwesome'
```
と出ていたので、下記で対処致しました。
<br>
<br>

```
- Xcode から ios/xcodeproj を開く
- info.plist を開く
- 「Add Row」で項目を追加。
- 「Fonts provided by application」を Key に設定
- 「Resources」 というディレクトリにアイコンフォントが一式入っているので、使用したいフォントファイル名を「value」に追加する。
- 状態でビルドし直すことでフォントが読み込まれる。

[bash]
$ react-native run-ios
[/bash]
```

上記でIconを表示させることができましたが、Iconをタップしても何も反応が起きません。
そこでビューをタッチに適切に応答させるためのラッパー、`TouchableOpacity`を追加しました。
<br>
<br>

```js:HomeScreen.js
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ImageBottomBar = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reloadButton}>
          <Icon name="refresh" color="yellow" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nopeButton}>
          <Icon name="times" color="#F06795" size={50} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.superLikeButton}>
          <Icon name="star" color="blue" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Icon name="heart" color="#64EDCC" size={40} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boostButton}>
          <Icon name="bolt" color="violet" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
```

これでImageBottomBarの実装は終了です。

<br>

---
### MainImage 作成

---

<br>

続いてHome画面の女性の画像を反映させるコンポーネントを作成します。