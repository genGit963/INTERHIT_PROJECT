import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../components/ThemedText';
import {CommunityColor} from '../../../constants/Color';
import NotificationSvg from '../../../assets/svg/bell.svg';
import NepaliFlagSvg from '../../../assets/svg/nepali_flag.svg';

export function Header() {
  return (
    <View style={styles.Container}>
      <View style={styles.Profile}>
        <Image
          height={60}
          width={60}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
          }}
          style={styles.Image}
        />
        <View>
          <ThemedText style={styles.CommunitySlog} type="defaultSemiBold">
            Jay Godar !
          </ThemedText>
          <ThemedText>Bhakta Bahadur Thapa</ThemedText>
        </View>
      </View>
      <View style={styles.NotifyLang}>
        <NotificationSvg height={32} width={32} />
        <NepaliFlagSvg height={32} width={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    // borderWidth: 1,
  },
  Profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0.68,
    gap: 16,
    alignItems: 'center',
  },
  Image: {
    borderRadius: 30,
    resizeMode: 'cover',
  },
  CommunitySlog: {
    color: CommunityColor.slogan,
  },
  NotifyLang: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    flex: 0.34,
  },
});

export default Header;
