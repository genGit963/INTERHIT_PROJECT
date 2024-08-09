import React from 'react';
import {SvgProps} from 'react-native-svg';
import {AppScreenNavigationType} from '../../core/navigation-type';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ThemedText} from '../ThemedText';
import {Colors} from '../../constants/Color';

// ---------------------- Drawer Bar Button ----------------------
type DrawerBarBtnProps = {
  Icon: React.FC<SvgProps>;
  Title: string;
  route: string;
  callbackModalVisible: (value: boolean) => void;
} & AppScreenNavigationType;

const DrawerBarBtn: React.FC<DrawerBarBtnProps> = ({
  Icon,
  Title,
  route,
  navigation,
  callbackModalVisible,
}) => {
  // on tapping bar button
  const handleTapping = () => {
    navigation.navigate(route);
    callbackModalVisible(false);
  };
  return (
    <TouchableOpacity style={styles.DrawerButton} onPress={handleTapping}>
      {/* Icon */}
      <Icon height={22} width={22} style={styles.BarBtnIcon} />

      {/* Title */}
      <ThemedText type="mediumBold" style={styles.Title}>
        {Title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  DrawerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    alignItems: 'center',
    marginVertical: 5,
    // borderWidth: 1,
  },
  BarBtnIcon: {},
  Title: {
    fontSize: 16,
    color: Colors.muteText,
  },
});

export default DrawerBarBtn;
