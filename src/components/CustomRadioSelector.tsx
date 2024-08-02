// CustomRadioSelector.tsx
import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {ThemedText} from './ThemedText';
import {Colors} from '../constants/Color';

interface CustomRadioSelectorProps {
  name: string;
  control: any;
  label: string;
  options: {label: string; value: string}[];
  isRequired?: boolean;
}

const CustomRadioSelector: React.FC<CustomRadioSelectorProps> = ({
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
            <View style={styles.radioGroup}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => onChange(option.value)}
                  style={styles.radioOption}>
                  <View
                    style={[
                      styles.radioButton,
                      value === option.value && styles.radioButtonSelected,
                    ]}
                  />
                  <Text>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
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
  radioGroup: {
    flexDirection: 'row',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 5,
  },
  radioButtonSelected: {
    backgroundColor: Colors.primary,
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

export default CustomRadioSelector;
