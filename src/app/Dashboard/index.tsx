import React from 'react';
import {Image, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Caursol from './components/Caursol';
import TodayUpdate from './components/TodayUpdate';
import DashboardMenuCompoent from './components/DashboardMenu';

import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const DashboardScreen: React.FC<DashboardScreenProps> = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Image
        source={require('../../assets/images/Ellipse.png')}
        style={styles.TopBG}
      />
      <SafeAreaView>
        {/* header */}
        <Header />

        {/* caursol */}
        <Caursol />
        <Image
          source={require('../../assets/images/Ellipse.png')}
          style={styles.MiddleBG}
        />

        {/* today update */}
        <TodayUpdate />

        {/*Banshawali*/}
        <DashboardMenuCompoent navigation={navigation} />
      </SafeAreaView>
      <Image
        source={require('../../assets/images/Ellipse.png')}
        style={styles.BottomBG}
      />
    </View>
  );
};

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
    top: -50,
    right: '5%',
    left: '50%',
    zIndex: -1,
    transform: [{rotate: '70deg'}],

    // backgroundColor: 'red',
    height: 300,
    width: 350,
  },
  MiddleBG: {
    position: 'absolute',
    bottom: '1%',
    left: 150,
    zIndex: -5,
    transform: [{rotate: '70deg'}],

    // backgroundColor: 'green',
    height: 300,
    width: 350,
  },

  BottomBG: {
    position: 'absolute',
    bottom: -80,
    right: -60,
    zIndex: -2,
    transform: [{rotate: '120deg'}],

    // backgroundColor: 'blue',
    height: 300,
    width: 350,
  },
});
