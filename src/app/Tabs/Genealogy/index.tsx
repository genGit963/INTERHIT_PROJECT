import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import {Colors} from '../../../constants/Color';
import WebView from 'react-native-webview';
import TabScreenTopTitle from '../../../components/TabScreenTopTitle';

// types and interface
type GenealogyTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Genealogy Tab Screen ---------------------
const GenealogyTabScreen: React.FC<GenealogyTabScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <TabScreenTopTitle screenTitle={'Genealogy'} />

        {/*  Screen Body */}
        <WebView
          source={{
            uri: 'https://thadaraiadhikari.com/family',
            headers: {},
          }}
          style={{flex: 1, width: '100%', height: '100%'}}
        />

        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
    height: '100%',
    width: '100%',
  },
});

export default GenealogyTabScreen;
