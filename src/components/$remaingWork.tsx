import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {ThemedText} from './ThemedText';

const TopPriority = () => {
  return (
    <ThemedText type="mediumBold" style={{fontSize: 16, color: 'red'}}>
      Top
    </ThemedText>
  );
};

const MediumPriority = () => {
  return (
    <ThemedText type="mediumBold" style={{fontSize: 16, color: 'blue'}}>
      Mid
    </ThemedText>
  );
};

const LowPriority = () => {
  return (
    <ThemedText type="mediumBold" style={{fontSize: 16, color: 'orange'}}>
      Low
    </ThemedText>
  );
};

function doneRW(): StyleProp<TextStyle> {
  return {
    color: 'green',
    fontSize: 12,
    textDecorationLine: 'line-through',
  };
}

function pendIT(): StyleProp<TextStyle> {
  return {
    color: 'purple',
    fontSize: 14,
    textDecorationLine: 'underline',
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
      <ThemedText style={doneRW()}>
        <TopPriority /> 1. Language Translation: If some translation found
        incomplete, we can add as we progress, won't take any time.
      </ThemedText>
      <ThemedText style={pendIT()}>
        <TopPriority /> 2. ID Card and Contribtuion Certificate Svg Dynamic
      </ThemedText>
      <ThemedText style={pendIT()}>
        <MediumPriority /> 3. DISCUSSION: What to do in Notice Tab
      </ThemedText>
      <ThemedText style={pendIT()}>
        <TopPriority /> 4. Geneology Work
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 5. OverView Finishing
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 6. Search Implementation on All
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 7. Loding Lotte
      </ThemedText>
      <ThemedText style={pendIT()}>
        <MediumPriority /> 8. Profile/Other Menu
      </ThemedText>
      <ThemedText style={pendIT()}>
        <MediumPriority /> 10. What to do with Merge Card lists
      </ThemedText>
      <ThemedText style={pendIT()}>
        <TopPriority /> 11. KulMandir API integration
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 12. Avoid whole Screen Loading rather use only in
        section
      </ThemedText>
      <ThemedText>
        <TopPriority /> 13. iOS Permission Access
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 14. Android Share Accesss
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 15. Android Share Accesss
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 16. Modal Border for Visibility
      </ThemedText>
      <ThemedText style={pendIT()}>
        <LowPriority /> 17. Sadhsaya member which members to fetch
      </ThemedText>
      <ThemedText style={doneRW()}>
        <MediumPriority /> REMOVED: 18. Committee History
      </ThemedText>
      <ThemedText style={doneRW()}>
        <MediumPriority /> TESTIN: 19. All Committee Screen API lookup Test
      </ThemedText>
      <ThemedText style={doneRW()}>
        <LowPriority /> 20. About Org Data: Update in Core/Society_Data
      </ThemedText>
      <ThemedText style={doneRW()}>
        <LowPriority /> 21. Well Wishes: Update in Core/Society_Data
      </ThemedText>
      <ThemedText style={pendIT()}>
        <MediumPriority /> 22. Setting/Update Profile must alike Edit Form //API
        not available
      </ThemedText>
      <ThemedText style={pendIT()}>
        <MediumPriority /> 23. Setting/Manage Pswd //API not available
      </ThemedText>
      <ThemedText>
        <MediumPriority /> 24. App update, Feedback, PP, Help, T&C Where to
        redirect in app or website
      </ThemedText>
      <ThemedText style={pendIT()}>
        <LowPriority /> 25. Checkout the logout properly
      </ThemedText>
      <ThemedText style={pendIT()}>
        <LowPriority /> 26. Attach Fb, insta and website link of banshawali,
        NOTE: keep data in Core/society_data
      </ThemedText>
      <ThemedText style={doneRW()}>
        <TopPriority /> 27. ios Tab Bar Padding bug
      </ThemedText>
      <ThemedText>
        <LowPriority /> 28. Downlaod Screen
      </ThemedText>
      <ThemedText>
        <TopPriority /> 28. TurnOff the Landscape mode for all screen
      </ThemedText>
      <ThemedText>Done for android, rebuild required.</ThemedText>
      <ThemedText style={doneRW()}>
        <MediumPriority /> 29. Confirmation while closing form
      </ThemedText>
    </View>
  );
};

export default RemainingWork;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 30,
  },
});
