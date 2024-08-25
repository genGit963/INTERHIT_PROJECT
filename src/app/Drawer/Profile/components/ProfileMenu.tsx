import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../../../components/ThemedText';
import { AppScreenNavigationType } from '../../../../core/navigation-type';
import { profileMenuData } from '../menu-data';
import supplyShadowEffect from '../../../../utils/Shadow';

type ProfileMenuComponentProps = {} & AppScreenNavigationType;

const ProfileMenuComponent: React.FC<ProfileMenuComponentProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.MenuContainer}>
      {profileMenuData.map((menu, _) => {
        return (
          <TouchableOpacity
            activeOpacity={0.2}
            style={styles.MenuCard}
            key={menu.route}
            onPress={() => navigation.navigate(menu.route)}>
            <menu.Icon />
            <ThemedText style={styles.MenuLabel} type="mediumBold">
              {menu.label}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileMenuComponent;

const styles = StyleSheet.create({
  MenuContainer: { gap: 12, width: '100%', marginVertical: 6 },
  MenuCard: {
    margin: 4,
    // borderWidth: 0.5,
    // borderColor: Colors.muteGray,
    borderRadius: 10,
    backgroundColor: '#fffffa',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 16,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 5,
      Color: '#000',
      Opacity: 0.15,
      Elevation: 1,
    }),
  },
  MenuLabel: {
    fontSize: 16,
  },
});
