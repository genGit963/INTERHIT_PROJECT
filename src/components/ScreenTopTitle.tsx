import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {ThemedText} from './ThemedText';
import GoBackSvg from '../assets/svg/left-arrow.svg';
import {AppScreenNavigationType} from '../core/navigation-type';

type ScreenTopTitleProps = {
  screenTitle: string;
} & AppScreenNavigationType;

const ScreenTopTitle: React.FC<ScreenTopTitleProps> = ({
  navigation,
  screenTitle,
}) => {
  return (
    <View style={styles.Container}>
      {/* back Button */}
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => navigation.goBack()}>
        <GoBackSvg height={20} width={20} />
      </TouchableOpacity>
      <ThemedText type="mediumBold" style={styles.Route}>
        {screenTitle}
      </ThemedText>
    </View>
  );
};

export default ScreenTopTitle;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 16,
    // borderWidth: 1,
    alignItems: 'center',
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  BackButton: {
    height: 'auto',
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 0.1,
  },
  Route: {
    fontSize: 18,
    textAlign: 'center',
    flex: 0.8,
  },
});
