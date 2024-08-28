import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppScreenNavigationType} from '../../core/navigation-type';
import {ThemedText} from '../ThemedText';
import {SCREEN_NAME} from '../../core/AppScreen';
import {Colors} from '../../constants/Color';
import DropDownGrpSvg from '../../assets/svg/caret-white.svg';
import {useUserDataProvider} from '../../hooks/tabs/dashboard';
import {StoredUserType} from '../../schema/auth';

// type
type UserDrawerProps = {
  callBackSetDrawerModalVisible: (value: boolean) => void;
} & AppScreenNavigationType;

const UserDrawerView: React.FC<UserDrawerProps> = ({
  navigation,
  callBackSetDrawerModalVisible,
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
    <View style={styles.UserDrawerView}>
      {/* user */}
      <TouchableOpacity
        style={styles.UserView}
        onPress={() => {
          callBackSetDrawerModalVisible(false);
          navigation.navigate(SCREEN_NAME.DRAWER.PROFILE.MAIN);
        }}>
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
        <View style={styles.NamePhoneView}>
          <ThemedText type="semiBold" style={styles.Name}>
            {APPUSER?.user.name}
          </ThemedText>
          <ThemedText style={styles.Phone}>{APPUSER?.user.phone}</ThemedText>
        </View>
      </TouchableOpacity>

      {/* close modal */}
      <TouchableOpacity
        onPress={() => {
          callBackSetDrawerModalVisible(false);
        }}>
        <DropDownGrpSvg height={30} width={30} style={styles.DDSvgOpen} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  UserDrawerView: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  UserView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  Image: {
    borderRadius: 38,
    resizeMode: 'cover',
    height: 64,
    width: 64,
  },
  NoImageView: {
    // borderWidth: 1,
    borderRadius: 30,
    height: 50,
    width: 50,
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
  NamePhoneView: {
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  Name: {
    color: '#fff',
    fontSize: 14,
    margin: 0,
  },
  Phone: {
    color: '#fff',
    fontSize: 13,
    margin: 0,
  },
  DDSvgOpen: {
    transform: [{rotate: '0deg'}],
    // marginLeft: 16,
  },
});

export default UserDrawerView;
