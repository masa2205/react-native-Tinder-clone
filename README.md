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
### MainImage 作成

---

<br>

初めにHome画面の女性の画像を反映させるコンポーネントを実装します。
<br>
`components`ファルダに`MainImage.js`ファイルを作成します。
<br>
まず`MainImage.js`ファイルに簡単なテキスト、スタイルを実装しブラウザに反映させるテストをします。

<br>

```js:MainImage.js
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default MainImage = () => {
  return (
    <View style={styles.Imagecontainer}>
      <Text>MainImage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    flex: 1,
    alignitems: center,
    
  },
```
<br>

`MainImage.js`コンポーネントのテストコードが実装できたら一度`App.js`ファイルにインポートさせてシュミレーター上でテキストが反映されるか確認します。

<br>

```js:App.js
import React from 'react';
import MainImage from './components/MainImage';

export default App = () => {
  return (
    <View>
      <MainImage />
    <View>
  );
};
```

<br>

確認ができたら`MainImage.js`ファイルのコードを編集していきます。
<br>
まずは画像を表示させます。まずはURLを直接記入し画像のスタイルを整えます。


<br>

```js:MainImage.js
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import users from '../../assets/data/users';


export default MainImage = () => {
  return (
    <View style={styles.Imagecontainer}>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/SAYA160312500I9A3721.jpg.webp?d=1420',
        }}>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    width: '95%',
    height: '85%',
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
});

```

<br>

画像の反映、スタイルが整えられたら、実際に使用するデータが用意してある`assets/data/users.js`のデータを`props`を使用し`App.js`ファイルから`MainImage.js`ファイルに値を渡します

- 名前(name)、年齢(age)、プロフィール(bio)、それぞれのテキストタグを作成しスタイルを整える
- 上記のテキストが画像の上に乗るように`Image`タグを`ImageBackground` タグに変更
- `props`を実装し`App.js`ファイルから`MainImage.js`ファイルに値を渡す


<br>

```js:MainImage.js
import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import ImageBottomBar from './ImageBottomBar';

export default MainImage = props => {
  const {name, image, age, bio} = props.user;
  return (
    <View style={styles.Imagecontainer}>
      <ImageBackground
        style={styles.Image}
        source={{
          uri: image,
        }}>
        <View style={styles.nameAgeContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <View>
          <Text style={styles.bio}>{bio}</Text>
        </View>
        <ImageBottomBar />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    width: '95%',
    height: '85%',
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  nameAgeContainer: {
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  age: {
    color: 'white',
    fontSize: 25,
    paddingTop: 5,
  },
  bio: {
    color: 'white',
    fontSize: 20,
    lineHeight: 25,
    marginHorizontal: 10,
    paddingBottom: 5,
  },
});
```

<br>

```js:App.js
import React from 'react';
import {View} from 'react-native';
import MainImage from './src/components/MainImage';
import users from './assets/data/users';

export default App = () => {
  return (
    <View>
      <MainImage user={users[0]} />
    </View>
  );
};
```

以上で`MainImage`コンポーネントの実装は終了です。

<br>

---

### ImageBottomBar 作成

---

<br>

`MainImage`の画像下部にアイコンを設置し、タップできるように実装します。

<br>
アイコンは左から

- 課金画面への遷移
- nopeボタン
- スーパーlikeボタン
- likeボタン
- 課金画面への遷移
<br>

上記5つになります。

<br>

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

### AppNavigator.js 作成

---

<br>

ホーム画面下部に画面を遷移させるバーを実装します。
<br>
まず画面遷移に必要なパッケージをインストールします。
<br>

- React Navigation(画面遷移ライブラリー)
- Stack Navigator(新しい画面がスタックの一番上に配置され、画面間の意向を提供するライブラリー)

Navigationの概要は下記の構造になります。

<br>

```
AppNavigator----StackNavigator
                    ├── HomeScreen
                    ├── LikeKeepScrenn
                    ├── ChatScreen
                    └── ProfileScreen
```

<br>

先に遷移先のスクリーンフォルダを一通り作成します。
<br>

- `src`フォルダ内に`navigation`フォルダを作成し、その中に`AppNavigator.js`ファイルを作成。
- `src`フォルダ内に`screens`フォルダを作成し、その中に上記4つのスクリーンファイルを作成。
<br>

- 画面が遷移できたことを確認するために簡単なテスト形式でそれぞれファイルの中身をテスト用に編集(`MainImage.js`ファイル作成時に簡単なテキスト、スタイルを実装しブラウザに反映させるテストをしたのと同じ形で大丈夫です。)
<br>

- HomeScreenに関してはホーム画面となるので、既存の`App.js`に記載されているコードをコピー(パスの指定が変わるのでそこだけ編集)
  
<br>

以上できましたら`AppNavigation.js`ファイルを編集していきます。


まず先にインポートした`Stack Navigator`をファイル内でインポートします


```js:AppNavigation.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
```

まず`HomeScreen`の画面遷移から行います。
<br>
`HomeScreen`をインポートします
<br>
```js:AppNavigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
```
<br>
次に`React Navigation`の公式ドキュメントに従って編集します
<br>
[React Navigation公式ドキュメント](https://reactnavigation.org/docs/hello-react-navigation/#creating-a-native-stack-navigator)

```js:AppNavigation.js
const Stack = createStackNavigator();

export default AppNavigator = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}
```
ここでコンポーネントがうまく渡っているか`App.js`で`React Nvigator`と`AppNvigator`をインポートし確認します。

```js:App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';


export default App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
```

こちらの実装で今まで通りの画面が反映されていれば問題ありません。
<br>
<br>
ここから画面遷移の実装に入ります。
<br>
まずアプリの下部にアイコンをタップしたら画面を遷移させるアイコンタブを作成します。
<br>
`React Navigation`で`createBottomTabNavigator`というライブラリーが用意されているのでこちらをインストールします。
<br>
こちらの実装方法も公式のドキュメントに従い、`AppNavigator`ファイルを編集します
<br>
[createBottomTabNavigator公式ドキュメント](https://reactnavigation.org/docs/custom-navigators/#built-in-navigators)
<br>
<br>

```js:AppNavigation.js
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => {
  return(
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="Home"
        component={HomeTransition}
        options={{headerShown: false}}
      />
    </ Tab.Navigator>
  )
}
```

createBottomTabNavigatorをファイル内でインポートします。

```js:AppNavigation.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
```

上記の編集により、アプリ下部に`Home`と出力されたタブバーが完成しました。
<br>
上記の行程を`LikeKeepScreen`,`ChatScreen`,`ProfileScreen`に関しても同様に編集します。
<br>

```js:AppNavigation.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LikeKeepScreen from '../screens/LikeKeepScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const LikeKeepTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LikeKeep"
        component={LikeKeepScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ChatTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => {
  return(
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="Home"
        component={HomeTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="LikeKeep"
        component={LikeKeepTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTransition}
        options={{headerShown: false}}
      />
    </ Tab.Navigator>
  )
}
```

上記の編集により、タブバーの中に`LikeKeep`,`Chat`,`Profile`追加され他と思います。
<br>
それぞれタップすると、指定されたscreensファイルに画面が遷移するのも確認できると思います。
<br>
<br>
最後にアイコンを追加させます。
<br>
`ImageBottomBar`ファイル同様、アイコンを表示させるために`vector-icons`ライブラリーをファイル内でインポートします。
<br>

```js:AppNavigation.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import LikeKeepScreen from '../screens/LikeKeepScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
```

実装方法も公式のドキュメントに従い、`screenoption`を定義します。
<br>
[createBottomTabNavigator公式ドキュメント](https://reactnavigation.org/docs/custom-navigators/#built-in-navigators)
<br>

```js:AppNavigation.js
const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'fire';
    } else if (route.name === 'LikeKeep') {
      iconName = 'star';
    } else if (route.name === 'Chat') {
      iconName = 'comments';
    } else if (route.name === 'profile') {
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

//タブの名前ごと(route.name)にアイコンの種類を出し分けて、アイコンのJSXをリターンする。
```

<br>
`screenOption` が定義できたら`Tab.Navigator`のオプションに反映させます。

```js:AppNavigation.js
export default AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
```

<br>
これで`AppNavigator`(画面遷移)の実装は終了です。
<br>