import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from './ThemedText';

const TopPriority = () => {
  return <ThemedText style={{color: 'red'}}>Top</ThemedText>;
};

const MediumPriority = () => {
  return <ThemedText style={{color: 'green'}}>Top</ThemedText>;
};

const LowPriority = () => {
  return <ThemedText style={{color: 'black'}}>Top</ThemedText>;
};

function DoneRW() {
  return {
    color: 'green',
    fontSize: 12,
    textDecorationLine: 'line-through',
  };
}

const RemainingWork = () => {
  return (
    <View style={styles.Container}>
      <ThemedText
        type="subtitle"
        style={{textDecorationLine: 'underline', color: 'purple'}}>
        Remaining Work
      </ThemedText>
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
      <ThemedText>17. Sadhsaya member which members to fetch</ThemedText>
      <ThemedText>17. Sadhsaya member which members to fetch</ThemedText>
      <ThemedText>18. Committee History </ThemedText>
      <ThemedText>19. All Committee Screen API lookup Test</ThemedText>
      <ThemedText>20. About Org Data: Update in Core/Society_Data</ThemedText>
      <ThemedText>21. Well Wishes: Update in Core/Society_Data</ThemedText>
      <ThemedText>22. Setting/Update Profile must alike Edit Form</ThemedText>
      <ThemedText>23. Setting/Manage Pswd </ThemedText>
      <ThemedText>
        24. App update, Feedback, PP, Help, T&C Where to redirect in app or
        website
      </ThemedText>
      <ThemedText>25. Checkout the logout properly</ThemedText>
      <ThemedText>
        26. Attach Fb, insta and website link of banshawali, NOTE: keep data in
        Core/society_data
      </ThemedText>
      <ThemedText>27. ios Tab Bar Padding bug</ThemedText>
    </View>
  );
};

export default RemainingWork;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 30,
  },
});
