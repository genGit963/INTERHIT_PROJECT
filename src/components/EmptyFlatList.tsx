import {StyleSheet, View} from 'react-native';
import React from 'react';

import EmptyListSvg from '../assets/svg/empty-list.svg';
import {ThemedText} from './ThemedText';
import {Colors} from '../constants/Color';

const EmptyFlatList = ({message}: {message: string}) => {
  return (
    <View style={styles.Container}>
      <EmptyListSvg height={250} width={250} />
      <ThemedText style={styles.Message} type="subtitle">
        {message}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 'auto',
    marginVertical: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Message: {
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.muteText,
  },
});

export default EmptyFlatList;
