import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';

export default function TopContribution() {
  return (
    <View style={styles.Page}>
      <SafeAreaView>
        <ThemedText>This is Top Contribution Screen</ThemedText>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
});
