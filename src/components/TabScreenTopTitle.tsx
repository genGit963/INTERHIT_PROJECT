import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ThemedText} from './ThemedText';

type TabScreenTopTitleProps = {
  screenTitle: string;
};

const TabScreenTopTitle: React.FC<TabScreenTopTitleProps> = ({screenTitle}) => {
  return (
    <View style={styles.Container}>
      <ThemedText type="mediumBold" style={styles.Route}>
        {screenTitle}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
  },
  Route: {
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
});

export default TabScreenTopTitle;
