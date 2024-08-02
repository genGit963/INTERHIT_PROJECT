// CustomDropdownSelector.tsx
import React from 'react';

import {View, StyleSheet, Picker, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {ThemedText} from './ThemedText';
import {Colors} from '../constants/Color';

interface CustomDropdownSelectorProps {
  name: string;
  control: any;
  label: string;
  options: {label: string; value: string}[];
  isRequired?: boolean;
}

const CustomDropdownSelector: React.FC<CustomDropdownSelectorProps> = ({
  name,
  control,
  label,
  options,
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
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={styles.picker}>
              {options.map((option) => (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
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
  picker: {
    height: 50,
    width: '100%',
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

export default CustomDropdownSelector;
