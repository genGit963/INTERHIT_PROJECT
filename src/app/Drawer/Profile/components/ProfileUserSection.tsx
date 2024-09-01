import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ThemedText} from '../../../../components/ThemedText';
import HeroButton from '../../../../components/HeroButton';
import {Colors} from '../../../../constants/Color';
import {useUserDataProvider} from '../../../../hooks/tabs/dashboard';
import {StoredUserType} from '../../../../schema/auth';
import {getShortHandOfName} from '../../../../utils/nameParser';
import useTranslate from '../../../../hooks/language/translate';

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

  const {translateLanguage} = useTranslate();

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
            {getShortHandOfName(String(APPUSER?.user.name))}
          </ThemedText>
        </View>
      )}
      <View style={styles.UserInfo}>
        <ThemedText type="semiBold" style={styles.UserName}>
          {APPUSER?.user.name}
        </ThemedText>
        <ThemedText>{APPUSER?.user.email}</ThemedText>
        <HeroButton
          btnText={translateLanguage('Show My QR', 'मेरो QR देखाउनुहोस्')}
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
    borderWidth: 1,
    height: 90,
    width: 90,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.primary,
  },
  NoImageText: {
    textAlign: 'center',
    color: Colors.whiteTunedBG,
    fontSize: 36,
    // backgroundColor: 'green',
    paddingTop: 16,
  },
  UserInfo: {
    marginVertical: 2,
  },
  UserName: {
    fontSize: 18,
  },
  QRButton: {
    alignItems: 'flex-start',
  },
});

export default ProfileUserSection;
