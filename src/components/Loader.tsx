import {StyleSheet, ViewProps} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

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
    // backgroundColor: Colors.background,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
    // borderWidth: 1,
  },
});
