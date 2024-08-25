import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { AppScreenNavigationType } from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import { Colors } from '../../../constants/Color';
import WebView from 'react-native-webview';

// types and interface
type GenealogyTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Genealogy Tab Screen ---------------------
const GenealogyTabScreen: React.FC<GenealogyTabScreenProps> = ({
  navigation,
}) => {
  return (
    <WebView source={{
      uri: "https://thadaraiadhikari.com/family", headers: {

      }
    }} style={{ flex: 1, width: "100%", height: "100%" }} />
    // <View style={styles.Page}>
    //   <SafeAreaView style={styles.Screen}>
    //     {/* Title */}
    //     <ScreenTopTitle navigation={navigation} screenTitle="Genealogy" />

    //     {/*  Screen Body */}
    //     <ScrollView style={{ flex: 1 }}>

    //     </ScrollView>

    //     <BottomSpace spaceHeight={'5%'} />
    //   </SafeAreaView>
    // </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
});

export default GenealogyTabScreen;
