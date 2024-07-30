import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {ThemedText} from '../../../components/ThemedText';

export function DashboardScreen() {
  return (
    <View style={styles.Page}>
      <SafeAreaView>
        <ThemedText>This is Download Screen</ThemedText>
      </SafeAreaView>
    </View>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#fff',
    flex: 1,
    paddingHorizontal: 24,
  },
});
