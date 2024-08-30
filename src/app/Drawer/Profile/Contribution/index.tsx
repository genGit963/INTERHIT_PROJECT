import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import HeroButton from '../../../../components/HeroButton';
import RequestContriCertiSvg from '../../../../assets/svg/solid-plus-circle.svg';
import ContributionFormModal from './components/ContributionForm';
import supplyShadowEffect from '../../../../utils/Shadow';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type ProfileContributionScreenProps = {} & AppScreenNavigationType;

// ----------------- Profile contribution Screen ---------------------
const ProfileContributionScreen: React.FC<ProfileContributionScreenProps> = ({
  navigation,
}) => {
  const [isContributionFormModalVisible, setContributionFormModalVisible] =
    useState<boolean>(false);

  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Contribution', 'योगदान')}
        />

        {/*  Screen Body */}
        <View style={styles.ScreenBody}>
          {/* Contribution Certificate  */}
          <Image
            source={require('../../../../assets/images/contribution-certificate.jpg')}
            resizeMode="contain"
            style={styles.CertificateImg}
          />

          {/* Certificate Download Button */}
          <HeroButton btnText={'Download'} style={styles.DownloadBtn} />
        </View>

        {/* Contribution Form Modal Add Button */}
        <TouchableOpacity
          style={styles.ReqContributionCertButton}
          onPress={() => setContributionFormModalVisible(true)}>
          <RequestContriCertiSvg style={styles.AddIcon} />
        </TouchableOpacity>

        {/* Contribution Form Modal */}
        {isContributionFormModalVisible && (
          <ContributionFormModal
            isVisible={isContributionFormModalVisible}
            modalVisibile={setContributionFormModalVisible}
          />
        )}

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
    flex: 1,
  },
  ScreenBody: {
    alignItems: 'flex-end',
    padding: 16,
    // borderWidth: 1,
  },
  CertificateImg: {
    height: 250,
    width: '100%',
  },
  DownloadBtn: {
    width: '50%',
  },
  ReqContributionCertButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '8%' : '6%',
    right: '1%',
    zIndex: 10,
  },
  AddIcon: {
    height: 20,
    width: 20,
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 8,
      Color: 'black',
      Opacity: 0.6,
      Elevation: 8,
    }),
  },
});

export default ProfileContributionScreen;
