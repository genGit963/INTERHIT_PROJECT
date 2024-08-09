import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CommitteeMemberInterface} from '../../../../../schema/drawer/committee';
import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';

// type
type MemberCardProps = {
  memberData: CommitteeMemberInterface;
};

const MemberCard: React.FC<MemberCardProps> = ({memberData}) => {
  return (
    <View style={styles.MemberCard}>
      <Image source={{uri: memberData.Image}} style={styles.MemberImage} />
      <ThemedText type="semiBold" style={styles.MemberPost}>
        {memberData.Post}
      </ThemedText>
      <ThemedText type="mediumBold" style={styles.MemberName}>
        {memberData.Name}
      </ThemedText>
      <ThemedText style={styles.MemberPhone}>{memberData.Phone}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  MemberCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 1,

    height: 200,
    width: 140,
    padding: 4,
  },
  MemberImage: {
    height: 120,
    width: 130,
    resizeMode: 'cover',
    alignItems: 'center',
    borderRadius: 6,
  },
  MemberPost: {
    // backgroundColor: 'red',
    color: Colors.text,
    textAlign: 'center',
  },
  MemberName: {
    // backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 13,
  },
  MemberPhone: {
    textAlign: 'center',
  },
});

export default MemberCard;
