import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';

import Header from './components/Header';
import Caursol from './components/Caursol';
import TodayUpdate from './components/TodayUpdate';

export function DashboardScreen() {
  return (
    // <ImageBackground
    //   source={require('../../assets/svg/')}
    //   imageStyle={styles.BackImage}
    //   style={styles.ImageBackground}>
    <View style={styles.Page}>
      {/* <Image
          source={require('../../../')}
          style={styles.TopBG}
        /> */}
      <SafeAreaView>
        {/* header */}
        <Header />

        {/* caursol */}
        <Caursol />

        {/* today update */}
        <TodayUpdate />

        {/*Banshawali*/}
      </SafeAreaView>
      {/* <Image
        source={require('../../../assets/svg/Ellipse.png')}
        height={300}
        width={300}
      /> */}
    </View>
    // </ImageBackground>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#fff',
    flex: 1,
    paddingHorizontal: 24,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  BackImage: {
    objectFit: 'cover',
  },
  TopBG: {
    position: 'absolute',
    top: -200,
    right: '12%',
    left: '30%',
    transform: [{rotate: '45deg'}],
  },
});
