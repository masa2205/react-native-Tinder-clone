import React, {useState, useEffect} from 'react';
import {View, StyleSheet, useWindowDimensions, Image} from 'react-native';
import MainImage from '../components/MainImage';
import users from '../../assets/data/users';
import Like from '../../assets/images/LIKE.png';
import Nope from '../../assets/images/nope.png';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addLike} from '../../store/actions/user';

export default HomeScreen = () => {
  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const [imageIndex, setImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(imageIndex + 1);
  const imageProfile = users[imageIndex];
  const nextImageProfile = users[nextImageIndex];

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(
        translateX.value,
        [-hiddenTranslateX, 0, hiddenTranslateX],
        [-60, 0, 60],
      ) + 'deg',
  );

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));
  const nextImageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.6, 1],
    ),
  }));
  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 6], [0, 1]),
  }));
  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 6], [0, 1]),
  }));

  const dispatc = useDispatch()

  const like = (usersIndex, isRight) => {
    if (isRight) {
      dispatc(addLike({likeUser: imageProfile}))
    }
    setImageIndex(usersIndex + 1);
  };

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: event => {
      if (Math.abs(event.velocityX) < 800) {
        translateX.value = withSpring(0);
        return;
      }
      const isRight = event.velocityX > 0;

      translateX.value = withSpring(
        event.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
        {},
        () => runOnJS(like)(imageIndex, isRight),
      );
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextImageIndex(imageIndex + 1);
  }, [imageIndex, translateX]);

  return (
    <View style={styles.container}>
      {nextImageProfile && (
        <View style={styles.nextImageContainer}>
          <Animated.View style={[styles.animatedImage, nextImageStyle]}>
            <MainImage user={nextImageProfile} />
          </Animated.View>
        </View>
      )}
      {imageProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedImage, imageStyle]}>
            <Animated.Image
              source={Like}
              style={[styles.like, {left: 10}, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Nope}
              style={[styles.nope, {right: 10}, nopeStyle]}
              resizeMode="contain"
            />
            <MainImage user={imageProfile} />
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  nextImageContainer: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
    top: 10,
  },
  nope: {
    width: 150,
    height: 150,
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
    top: 10,
  },
});
