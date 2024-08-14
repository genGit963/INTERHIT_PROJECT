import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../components/ThemedText';

type AuthScreenTopProps = {
  screenTitle: string;
};

const AuthScreenTop: React.FC<AuthScreenTopProps> = ({screenTitle}) => {
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

    // borderWidth: 1,
  },
  Route: {
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
});

export default AuthScreenTop;
