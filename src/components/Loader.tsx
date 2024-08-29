import {SafeAreaView, StyleProp, StyleSheet, ViewProps} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {DIMENSION} from '../constants/dimension';
import {Colors} from '../constants/Color';

type LoaderProps = {} & ViewProps;

const Loader: React.FC<LoaderProps> = ({style}) => {
  return (
    <LottieView
      source={require('../assets/lottie/loading.json')}
      autoPlay
      loop
      style={styles.loader}
    />
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: DIMENSION.SCREEN.width,
    height: 250,
    // borderWidth: 1,
  },
});
