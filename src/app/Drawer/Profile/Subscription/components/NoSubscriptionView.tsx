import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoSubSvg from '../../../../../assets/svg/info.svg';
import {ThemedText} from '../../../../../components/ThemedText';
import HeroButton from '../../../../../components/HeroButton';

const NoSubscriptionView = () => {
  return (
    <View style={styles.NoSubsView}>
      <View style={styles.NoSubsInfoView}>
        <NoSubSvg height={24} width={24} style={styles.NoSubIcon} />
        <View style={styles.InfoView}>
          <ThemedText type="mediumBold">
            You don&#39;t have an active subscription
          </ThemedText>
          <ThemedText>
            Buy a subscription to enjoy smooth travels and save more with
            exclusive benefits.
          </ThemedText>
        </View>
      </View>
      {/* Subscribe button */}
      <HeroButton btnText="Subscribe" style={styles.SubsBtn} />
    </View>
  );
};

export default NoSubscriptionView;

const styles = StyleSheet.create({
  NoSubsView: {
    marginTop: '60%',
  },
  NoSubsInfoView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    // borderWidth: 1,
    padding: 5,
  },
  InfoView: {
    flex: 0.9,
    // backgroundColor: 'red',
  },
  NoSubIcon: {
    flex: 0.2,
  },
  SubsBtn: {
    marginVertical: 50,
  },
});
