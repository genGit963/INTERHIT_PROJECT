import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ThemedText} from '../../../../components/ThemedText';
import HeroButton from '../../../../components/HeroButton';
import {Colors} from '../../../../constants/Color';
import {useUserDataProvider} from '../../../../hooks/tabs/dashboard';
import {StoredUserType} from '../../../../schema/auth';

// types
type ProfileUserSectionProps = {
  callBackSetQRModalVisible: (val: boolean) => void;
};

const ProfileUserSection: React.FC<ProfileUserSectionProps> = ({
  callBackSetQRModalVisible,
}) => {
  // app user
  const {handleUserDataProvider} = useUserDataProvider();
  const [APPUSER, setAPPUSER] = useState<StoredUserType | null | undefined>();
  useEffect(() => {
    const handleFetchUser = async () => {
      const appUser = await handleUserDataProvider();
      // console.log('APPUSER : ', appUser);
      if (appUser) {
        setAPPUSER(appUser);
      }
    };
    handleFetchUser();
  }, []);

  return (
    <View style={styles.UserView}>
      {APPUSER?.user.imgurl ? (
        <Image
          height={60}
          width={60}
          source={{
            uri: APPUSER?.user.imgurl as string | undefined,
          }}
          style={styles.Image}
        />
      ) : (
        <View style={styles.NoImageView}>
          <ThemedText style={styles.NoImageText} type="title">
            MB
          </ThemedText>
        </View>
      )}
      <View style={styles.UserInfo}>
        <ThemedText type="semiBold" style={styles.UserName}>
          {APPUSER?.user.name}
        </ThemedText>
        <ThemedText>{APPUSER?.user.email}</ThemedText>
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
    gap: 10,
    marginBottom: 16,
  },
  Image: {
    resizeMode: 'cover',
    height: 90,
    width: 90,
    borderRadius: 70,
  },
  NoImageView: {
    // borderWidth: 1,
    borderRadius: 38,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    backgroundColor: Colors.primary,
  },
  NoImageText: {
    textAlign: 'center',
    color: Colors.whiteTunedBG,
    fontSize: 28,
    // backgroundColor: 'green',
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
