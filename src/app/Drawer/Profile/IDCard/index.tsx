import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import NoIDCard from './components/NoIDCard';

// types and interface
type IDCardScreenProps = {} & AppScreenNavigationType;

// ----------------- Subscription Screen ---------------------
const IDCardScreen: React.FC<IDCardScreenProps> = ({navigation}) => {
  // open Id card field
  const [isIDCardRequestModalVisible, setIDCardRequestModalVisible] =
    useState<boolean>(false);
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="ID Card" />

        {/*  Screen Body */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* No ID card view */}
          <NoIDCard
            callBackIDCardReqModalVisible={setIDCardRequestModalVisible}
          />
        </ScrollView>

        {/* Request Id Modal */}
        {/* {isIDCardRequestModalVisible && } */}

        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </View>
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

export default IDCardScreen;
