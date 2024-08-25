import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SoceityContributionInterface, SocietyContributionRespInterface } from '../../../../schema/tabs/contribution/contributions.schema';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from '../../../../constants/Color';
import { truncateContent } from '../../../../utils/stringPrototype';

type ContributionCardPropsTypes = {
  contributionData: SocietyContributionRespInterface;
  callbackHandlePress: (event: SocietyContributionRespInterface) => void,
};

const ContributionCard: React.FC<ContributionCardPropsTypes> = ({
  contributionData,
  callbackHandlePress
}) => {
  return (
    <TouchableOpacity style={styles.ContributionCard} onPress={() => callbackHandlePress(contributionData)}>
      <View style={styles.ContributionCardBody}>
        <View style={styles.DetailView}>
          {/* title */}
          <ThemedText type="mediumBold" style={styles.Title}>
            {contributionData.title}
          </ThemedText>

          {/* OrganizedBy */}
          <ThemedText style={styles.OrganizedBy}>
            <ThemedText type="mediumBold">Organized By:</ThemedText>{' '}
            {contributionData.organizer}
          </ThemedText>

          {/* Description */}
          <ThemedText type="default" style={styles.Description}>
            {truncateContent(contributionData.description, 25)}...
          </ThemedText>
        </View>
        <Image
          source={{
            uri: contributionData.image.secure_url,
          }}
          alt="blog_image"
          style={styles.contributionDataImg}
        />
      </View>
    </TouchableOpacity>
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
