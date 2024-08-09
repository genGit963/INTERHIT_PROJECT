import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SoceityContributionInterface} from '../../../../schema/tabs/contribution/contributions.schema';
import {ThemedText} from '../../../../components/ThemedText';
import {Colors} from '../../../../constants/Color';

type ContributionCardPropsTypes = {
  contributionData: SoceityContributionInterface;
};

const ContributionCard: React.FC<ContributionCardPropsTypes> = ({
  contributionData,
}) => {
  return (
    <View style={styles.ContributionCard}>
      <View style={styles.ContributionCardBody}>
        <View style={styles.DetailView}>
          {/* title */}
          <ThemedText type="mediumBold" style={styles.Title}>
            {contributionData.Title}
          </ThemedText>

          {/* OrganizedBy */}
          <ThemedText style={styles.OrganizedBy}>
            <ThemedText type="mediumBold">Organized By:</ThemedText>{' '}
            {contributionData.OrganizedBy}
          </ThemedText>

          {/* Description */}
          <ThemedText type="default" style={styles.Description}>
            {contributionData.Description}
          </ThemedText>
        </View>
        <Image
          source={{
            uri: contributionData.Image,
          }}
          alt="blog_image"
          style={styles.contributionDataImg}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  ContributionCard: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.muteGray,
    marginVertical: 16,
  },
  ContributionCardBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  DetailView: {
    flex: 0.6,
    // backgroundColor: 'red',
  },
  Title: {
    fontSize: 18,
    paddingVertical: 4,
  },
  Description: {
    textAlign: 'left',
  },
  contributionDataImg: {
    flex: 0.38,
    aspectRatio: 14 / 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  OrganizedBy: {
    marginBottom: 6,
  },
});

export default ContributionCard;
