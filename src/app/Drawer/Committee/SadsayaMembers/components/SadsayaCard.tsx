import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CommitteeMemberInterface} from '../../../../../schema/drawer/committee';
import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';

// type
type SadhashyaCardProps = {
  sadhsaya: CommitteeMemberInterface;
};

const SadsayaCard: React.FC<SadhashyaCardProps> = ({sadhsaya}) => {
  return (
    <View style={styles.SadhashyaCard}>
      <Image source={{uri: sadhsaya.Image}} style={styles.SadhashyaImage} />
      <ThemedText type="semiBold" style={styles.SadhashyaPost}>
        {sadhsaya.Post}
      </ThemedText>
      <ThemedText type="mediumBold" style={styles.SadhashyaName}>
        {sadhsaya.Name}
      </ThemedText>
      <ThemedText style={styles.SadhashyaPhone}>{sadhsaya.Phone}</ThemedText>
    </View>
  );
};

export default SadsayaCard;

const styles = StyleSheet.create({
  SadhashyaCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 1,

    height: 200,
    width: 140,
    padding: 4,
  },
  SadhashyaImage: {
    height: 120,
    width: 130,
    resizeMode: 'cover',
    alignItems: 'center',
    borderRadius: 6,
  },
  SadhashyaPost: {
    // backgroundColor: 'red',
    color: Colors.text,
    textAlign: 'center',
  },
  SadhashyaName: {
    // backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 13,
  },
  SadhashyaPhone: {
    textAlign: 'center',
  },
});
