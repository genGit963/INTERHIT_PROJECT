import {DimensionValue, StyleSheet, View} from 'react-native';
import React from 'react';

type BottomSpaceProps = {
  spaceHeight: DimensionValue;
};

const BottomSpace: React.FC<BottomSpaceProps> = ({spaceHeight}) => {
  const styles = StyleSheet.create({
    Divider: {
      marginVertical: 5,
      height: spaceHeight,
      width: '100%',
    },
  });
  return <View style={styles.Divider} />;
};

export default BottomSpace;
