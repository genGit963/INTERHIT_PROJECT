import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from './ThemedText';

const RemainingWork = () => {
  return (
    <View style={styles.Container}>
      <ThemedText type="subtitle">Remaining Work </ThemedText>
      <ThemedText>1. Language Translation</ThemedText>
      <ThemedText>
        2. ID Card and Contribtuion Certificate Svg Dynamic
      </ThemedText>
      <ThemedText>3. What to do in Notice Tab</ThemedText>
      <ThemedText>4. Geneology Work</ThemedText>
      <ThemedText>5. OverView Finishing</ThemedText>
      <ThemedText>6. Search Implementation on All</ThemedText>
      <ThemedText>7. Downlaod Screen</ThemedText>
      <ThemedText>7. Loding Lotte</ThemedText>
      <ThemedText>8. Profile/Other Menu</ThemedText>
      <ThemedText>10. What to do with Merge Card lists</ThemedText>
      <ThemedText>11. KulMandir API integration</ThemedText>
      <ThemedText>
        12. Avoid whole Screen Loading rather use only in section
      </ThemedText>
      <ThemedText>13. iOS Permission Access</ThemedText>
      <ThemedText>14. Android Share Accesss</ThemedText>
      <ThemedText>15. Android Share Accesss</ThemedText>
      <ThemedText>16. Modal Border for Visibility</ThemedText>
    </View>
  );
};

export default RemainingWork;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 30,
  },
});
