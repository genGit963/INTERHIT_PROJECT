import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../../components/ThemedText';
import HeroButton from '../../../../components/HeroButton';
import {Colors} from '../../../../constants/Color';

// types
type ProfileUserSectionProps = {
  callBackSetQRModalVisible: (val: boolean) => void;
};

const ProfileUserSection: React.FC<ProfileUserSectionProps> = ({
  callBackSetQRModalVisible,
}) => {
  return (
    <View style={styles.UserView}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe01D54Hht5ADaw7iXaFyb8PPLl_jPtFW79Q&s',
        }}
        alt="user_photo"
        resizeMode="cover"
        style={styles.UserImage}
      />
      <View style={styles.UserInfo}>
        <ThemedText type="semiBold" style={styles.UserName}>
          Bhakta Bahadur Godar
        </ThemedText>
        <ThemedText>example@gmail.com</ThemedText>
        <HeroButton
          btnText="Show My QR"
          onPress={() => callBackSetQRModalVisible(true)}
          varient="done"
          style={styles.QRButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  UserImage: {
    height: 90,
    width: 90,
    borderRadius: 70,
  },
  UserInfo: {},
  UserName: {
    fontSize: 18,
  },
  QRButton: {
    width: 130,
    alignItems: 'flex-start',
  },
});

export default ProfileUserSection;
