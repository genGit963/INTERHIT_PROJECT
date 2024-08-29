import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from '../ThemedText';
import {Colors} from '../../constants/Color';

// type
type ApiErrorProps = {
  message: string;
};

const ApiError: React.FC<ApiErrorProps> = ({message}) => {
  return (
    <View style={styles.ErrorView}>
      <ThemedText style={styles.ErrorText}>{message}</ThemedText>
    </View>
  );
};

export default ApiError;

const styles = StyleSheet.create({
  ErrorView: {
    width: '100%',
    alignItems: 'center',
    marginVertical: '2%',
  },
  ErrorText: {
    color: Colors.redMain,
    textAlign: 'center',
  },
});
