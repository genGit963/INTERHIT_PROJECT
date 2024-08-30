import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import {ThemedText} from '../../../../components/ThemedText';
import NoSubscriptionView from './components/NoSubscriptionView';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type SubscriptionScreenProps = {} & AppScreenNavigationType;

// ----------------- Subscription Screen ---------------------
const SubscriptionScreen: React.FC<SubscriptionScreenProps> = ({
  navigation,
}) => {
  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Subscription', 'सदस्यता')}
        />

        {/*  Screen Body */}
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* Body title */}
          <ThemedText type="subtitle">Membership Detail</ThemedText>

          {/* NoSubview */}
          <NoSubscriptionView />
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

export default SubscriptionScreen;
