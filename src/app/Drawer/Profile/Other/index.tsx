import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type ProfileOtherScreenProps = {} & AppScreenNavigationType;

// ----------------- Profile other Screen ---------------------
const ProfileOtherScreen: React.FC<ProfileOtherScreenProps> = ({
  navigation,
}) => {
  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Other', 'अन्य')}
        />

        {/*  Screen Body */}

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

export default ProfileOtherScreen;
