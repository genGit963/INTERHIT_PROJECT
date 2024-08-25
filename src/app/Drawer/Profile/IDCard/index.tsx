import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { AppScreenNavigationType } from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import { Colors } from '../../../../constants/Color';
import NoIDCard from './components/NoIDCard';
import IDCardRequestModal from './components/IdCardRequestModal';
import { ThemedText } from '../../../../components/ThemedText';
import ProfileIcon from './components/IdCardComp';

// types and interface
type IDCardScreenProps = {} & AppScreenNavigationType;

// ----------------- Id Card Screen ---------------------
const IDCardScreen: React.FC<IDCardScreenProps> = ({ navigation }) => {
  // open Id card field
  const [isIDCardRequestModalVisible, setIDCardRequestModalVisible] =
    useState<boolean>(false);

  const [isIDCard, setIDCard] = useState<boolean>(true)

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="ID Card" />

        {/*  Screen Body */}
        {isIDCard ? <ProfileIcon name='Hari' idNumber='111' /> : <ScrollView showsVerticalScrollIndicator={false}>
          {/* No ID card view */}
          <NoIDCard
            callBackIDCardReqModalVisible={setIDCardRequestModalVisible}
          />

          {/* Request Id Modal */}
          {isIDCardRequestModalVisible && (
            <IDCardRequestModal
              isVisible={isIDCardRequestModalVisible}
              modalVisibile={setIDCardRequestModalVisible}
            />
          )}
        </ScrollView>}


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
