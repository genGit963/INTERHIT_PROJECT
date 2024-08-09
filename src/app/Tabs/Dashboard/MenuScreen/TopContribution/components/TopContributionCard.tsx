import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ThemedText} from '../../../../../../components/ThemedText';
import {TopContributionInterface} from '../../../../../../schema/tabs/dashboard/top-contribution.schema';
import {Colors} from '../../../../../../constants/Color';
import supplyShadowEffect from '../../../../../../utils/Shadow';

// type
type TopContributionCardProps = {
  topContribution: TopContributionInterface;
};

const TopContributionCard: React.FC<TopContributionCardProps> = ({
  topContribution,
}) => {
  return (
    <View style={styles.TopContributionCard}>
      <Image
        source={{uri: topContribution.Image}}
        resizeMode="cover"
        style={styles.ContributrImage}
        alt={topContribution.ContributerName}
      />
      {/* Contributer and Date */}
      <View style={styles.ContributerDateView}>
        <ThemedText type="mediumBold">
          {topContribution.ContributerName}
        </ThemedText>
        <ThemedText type="muted">
          {topContribution.DateofContribution}
        </ThemedText>
      </View>

      {/* Amt and purpose */}
      <View style={styles.AmtPurposeView}>
        <ThemedText type="mediumBold">Rs: {topContribution.Amount}</ThemedText>
        <ThemedText type="muted">{topContribution.Purpose}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TopContributionCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,

    // borderWidth: 0.5,
    // borderColor: Colors.muteGray,
    backgroundColor: Colors.whiteTunedBG,
    borderRadius: 10,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 3,
      Color: '#000',
      Opacity: 0.15,
      Elevation: 3,
    }),
  },
  ContributrImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  ContributerDateView: {
    // backgroundColor: 'red',
    width: '42%',
  },
  AmtPurposeView: {
    // backgroundColor: 'blue',
    width: '30%',
  },
});

export default TopContributionCard;
