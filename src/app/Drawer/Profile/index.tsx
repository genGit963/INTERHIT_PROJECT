import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import {Colors} from '../../../constants/Color';
import ProfileMenuComponent from './components/ProfileMenu';
import ProfileUserSection from './components/ProfileUserSection';
import HeroButton from '../../../components/HeroButton';
import ShowMyQRModal from './components/showMyQR';

// types and interface
type ProfileScreenProps = {} & AppScreenNavigationType;

// ----------------- Profile Screen ---------------------
const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const [isQRModalVisible, setQRModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Profile" />

        {/* User View */}
        <ProfileUserSection callBackSetQRModalVisible={setQRModalVisible} />

        {/* Profile Body*/}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Menus */}
          <ProfileMenuComponent navigation={navigation} />

          {/* User QR component*/}

          {isQRModalVisible && (
            <ShowMyQRModal
              isVisible={isQRModalVisible}
              modalVisibile={setQRModalVisible}
              data={JSON.stringify({
                Name: 'Mahesh Bogati',
                BankAccount: '92309202394024902342',
                Remark: 'This is my QR to money to my account',
              })}
            />
          )}
        </ScrollView>
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
  QRCode: {fontSize: 18, textAlign: 'center', marginVertical: 6},
});

export default ProfileScreen;
