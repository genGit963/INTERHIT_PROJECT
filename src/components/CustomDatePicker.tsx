// CustomDatePicker.tsx
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

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
            <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
              <Text style={styles.dateText}>
                {value ? new Date(value).toLocaleDateString() : 'Select Date'}
              </Text>
            </TouchableOpacity>
            <Modal
              visible={isDatePickerVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={hideDatePicker}>
              <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                  <DatePicker
                    date={value ? new Date(value) : new Date()}
                    mode="date"
                    onDateChange={onChange}
                  />
                  <TouchableOpacity
                    onPress={hideDatePicker}
                    style={styles.confirmButton}>
                    <ThemedText style={styles.confirmButtonText}>
                      Confirm
                    </ThemedText>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
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
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
  requiredSymbol: {
    color: Colors.redColor,
    fontSize: 18,
    marginBottom: 5,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Colors.whiteTunedBG,
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
  dateText: {
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  confirmButton: {
    marginTop: 16,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: -2,
  },
  errorText: {
    color: Colors.redColor,
    marginTop: 4,
  },
});

export default CustomDatePicker;
