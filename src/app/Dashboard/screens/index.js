import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from '../components/Header';

export function DashboardScreen() {
  return (
    <View style={styles.Page}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </View>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
