// CustomDatePicker.tsx
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Controller} from 'react-hook-form';
import {ThemedText} from './ThemedText';
import {Colors} from '../constants/Color';

interface CustomDatePickerProps {
  name: string;
  control: any;
  label: string;
  isRequired?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  name,
  control,
  label,
  isRequired,
}) => {
  return (
    <View style={styles.inputContainer}>
      <ThemedText style={styles.label}>
        {label}
        {isRequired && <Text style={styles.requiredSymbol}>*</Text>}
      </ThemedText>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <DateTimePicker
              value={value ? new Date(value) : new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => onChange(selectedDate)}
            />
            {error && (
              <ThemedText style={styles.errorText}>{error.message}</ThemedText>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
  },
  requiredSymbol: {
    color: Colors.redColor,
    fontSize: 18,
    marginBottom: 5,
  },
  errorText: {
    color: Colors.redColor,
    marginTop: 4,
  },
});

export default CustomDatePicker;
