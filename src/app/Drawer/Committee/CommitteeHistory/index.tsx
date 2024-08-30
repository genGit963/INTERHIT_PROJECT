import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {ThemedText} from '../../../../components/ThemedText';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type CommitteeHistoryScreenProps = {} & AppScreenNavigationType;

// ----------------- CommitteeHistory screen ---------------------
const CommitteeHistoryScreen: React.FC<CommitteeHistoryScreenProps> = ({
  navigation,
}) => {
  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Committee History', 'समिति इतिहास')}
        />

        {/* Body */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText>Here will CommitteeHistoryScreen</ThemedText>
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
});

export default CommitteeHistoryScreen;
