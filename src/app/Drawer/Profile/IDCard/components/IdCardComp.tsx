// ProfileIcon.tsx
import React from 'react';
import {IdCardZType} from '../../../../../schema/drawer/profile/id-card.schema';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from '../../../../../components/ThemedText';
import {SOCIETY_DATA} from '../../../../../core/SocietyData';

type ProfileIconProps = {
  idCardData: IdCardZType;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({idCardData}) => {
  return (
    <View style={styles.IdContainer}>
      <View style={styles.CommunityIntro}>
        <ThemedText>Icon</ThemedText>
        <View>
          <ThemedText>{SOCIETY_DATA.name}</ThemedText>
          <ThemedText>{SOCIETY_DATA.address}</ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  IdContainer: {
    margin: 'auto',
    height: 720,
    width: 380,
    borderWidth: 1,
    borderRadius: 10,
  },
  CommunityIntro: {},
});
export default ProfileIcon;
