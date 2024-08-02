// IDCardRequestModal.tsx
import React, {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Modal, ScrollView, StyleSheet, Button, View, Text} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  IdCardSchema,
  IdCardSchemaType,
} from '../../../../../schema/drawer/profile/id-card.schema';
import CustomTextInput from '../../../../../components/CustomInput';
import CustomDropdownSelector from '../../../../../components/CustomDropdownSelector';
import CustomRadioSelector from '../../../../../components/CustomRadioSelector';
import CustomDatePicker from '../../../../../components/CustomDatePicker';

const IDCardRequestModal: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IdCardSchemaType>({
    resolver: zodResolver(IdCardSchema),
  });

  const onSubmit: SubmitHandler<IdCardSchemaType> = (data) => {
    console.log(data);
    setModalVisible(false);
  };

  return (
    <View style={styles.screenContainer}>
      <Button
        title="Open ID Card Request Form"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>ID Card Request</Text>
          <ScrollView contentContainerStyle={styles.container}>
            <CustomTextInput
              name="fullName"
              control={control}
              label="Full Name"
              isRequired
              error={errors.fullName}
            />
            <CustomDatePicker
              name="dateOfBirth"
              control={control}
              label="Date of Birth"
              isRequired
            />
            <CustomTextInput
              name="birthPlace"
              control={control}
              label="Birth Place"
              isRequired
              error={errors.birthPlace}
            />
            <CustomRadioSelector
              name="gender"
              control={control}
              label="Gender"
              options={[
                {label: 'Male', value: 'Male'},
                {label: 'Female', value: 'Female'},
                {label: 'Others', value: 'Others'},
              ]}
              isRequired
            />
            <CustomDropdownSelector
              name="bloodGroup"
              control={control}
              label="Blood Group"
              options={[
                {label: 'A+', value: 'A+'},
                {label: 'A-', value: 'A-'},
                {label: 'B+', value: 'B+'},
                {label: 'B-', value: 'B-'},
                {label: 'O+', value: 'O+'},
                {label: 'O-', value: 'O-'},
                {label: 'AB+', value: 'AB+'},
                {label: 'AB-', value: 'AB-'},
              ]}
              isRequired
            />
            <CustomDropdownSelector
              name="province"
              control={control}
              label="Province"
              options={[
                {label: 'Province 1', value: 'Province 1'},
                {label: 'Province 2', value: 'Province 2'},
                {label: 'Province 3', value: 'Province 3'},
                {label: 'Province 4', value: 'Province 4'},
                {label: 'Province 5', value: 'Province 5'},
                {label: 'Province 6', value: 'Province 6'},
                {label: 'Province 7', value: 'Province 7'},
              ]}
              isRequired
            />
            <CustomDropdownSelector
              name="district"
              control={control}
              label="District"
              options={[
                {label: 'District 1', value: 'District 1'},
                {label: 'District 2', value: 'District 2'},
                // Add other districts as needed
              ]}
              isRequired
            />
            <CustomDropdownSelector
              name="localLevel"
              control={control}
              label="Local Level"
              options={[
                {label: 'Local Level 1', value: 'Local Level 1'},
                {label: 'Local Level 2', value: 'Local Level 2'},
                // Add other local levels as needed
              ]}
              isRequired
            />
            <CustomTextInput
              name="wardNo"
              control={control}
              label="Ward No."
              isRequired
            />
            <CustomTextInput
              name="contact"
              control={control}
              label="Contact"
              isRequired
              keyboardType="phone-pad"
            />
            <CustomTextInput
              name="organizationalPost"
              control={control}
              label="Organizational Post"
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default IDCardRequestModal;
