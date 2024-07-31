// CustomTextInput.tsx
import React from 'react';
import {TextInput, StyleSheet, View, TextInputProps, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {ThemedText} from './ThemedText';

interface CustomTextInputProps extends TextInputProps {
  name: string;
  control: any;
  label: string;
  error?: any;
  isRequired?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  style,
  name,
  control,
  label,
  isRequired,
  ...rest
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
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextInput
              style={[styles.input, style]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...rest}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  requiredSymbol: {
    color: 'red',
    fontSize: 18,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default CustomTextInput;
