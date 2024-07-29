import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Color';
import {ThemedText} from '../../../components/ThemedText';

export function Login() {
  return (
    <SafeAreaView>
      <View style={styles.Page}>
        <ThemedText>Login Screen</ThemedText>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
