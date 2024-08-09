import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppScreenNavigationType} from '../../core/navigation-type';
import {ThemedText} from '../ThemedText';
import {SCREEN_NAME} from '../../core/AppScreen';
import {Colors} from '../../constants/Color';
import DropDownGrpSvg from '../../assets/svg/caret-white.svg';

// type
type UserDrawerProps = {
  callBackSetDrawerModalVisible: (value: boolean) => void;
} & AppScreenNavigationType;

const UserDrawerView: React.FC<UserDrawerProps> = ({
  navigation,
  callBackSetDrawerModalVisible,
}) => {
  return (
    <View style={styles.UserDrawerView}>
      {/* user */}
      <TouchableOpacity
        style={styles.UserView}
        onPress={() => {
          callBackSetDrawerModalVisible(false);
          navigation.navigate(SCREEN_NAME.DRAWER.PROFILE.MAIN);
        }}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg',
          }}
          alt="user name"
          resizeMode="cover"
          style={styles.UserImage}
        />
        <View style={styles.NameEmailView}>
          <ThemedText type="mediumBold" style={styles.Name}>
            Bhakta Bahadur Thapa
          </ThemedText>
          <ThemedText style={styles.Email}>example@gmail.com</ThemedText>
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
  UserImage: {
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  NameEmailView: {
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  Name: {
    color: '#fff',
    fontSize: 13,
    margin: 0,
  },
  Email: {
    color: '#fff',
    fontSize: 11,
    margin: 0,
  },
  DDSvgOpen: {
    transform: [{rotate: '0deg'}],
    // marginLeft: 16,
  },
});

export default UserDrawerView;
