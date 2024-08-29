import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import NoIDCard from './components/NoIDCard';
import IDCardRequestModal from './components/IdCardRequestModal';
import {ThemedText} from '../../../../components/ThemedText';
import ProfileIcon from './components/IdCardComp';
import {IdCardZType} from '../../../../schema/drawer/profile/id-card.schema';

// types and interface
type IDCardScreenProps = {} & AppScreenNavigationType;

// ----------------- Id Card Screen ---------------------
const IDCardScreen: React.FC<IDCardScreenProps> = ({navigation}) => {
  // open Id card field
  const [isIDCardRequestModalVisible, setIDCardRequestModalVisible] =
    useState<boolean>(false);

  const [isIDCard, setIDCard] = useState<boolean>(false);

  const idCardDummyData: IdCardZType = {
    full_name: 'Mahesh Bogati',
    birth_date: '2056-20-14',
    birth_place: 'Dhulangari, Teesta',
    gender: 'Male',
    blood_group: 'AB-',
    province: 'Khoshi',
    district: 'Sunsari',
    local: 'Dharan',
    ward: '02',
    contact: '9080989809',
    org_position: 'Banshawali',
  };

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="ID Card" />

        {/*  Screen Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {!isIDCard ? (
            <ProfileIcon idCardData={idCardDummyData} />
          ) : (
            <View>
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
            </View>
          )}
        </ScrollView>
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
  ScrollView: {marginBottom: 10, paddingBottom: 30},
  ScrollContent: {paddingBottom: 180},
});

export default IDCardScreen;
