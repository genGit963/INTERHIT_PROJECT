// IDCardRequestModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Modal, ScrollView, StyleSheet, View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {
  IdCardSchema,
  IdCardSchemaType,
} from '../../../../../schema/drawer/profile/id-card.schema';
import CustomTextInput from '../../../../../components/CustomInput';
import CustomDatePicker from '../../../../../components/CustomDatePicker';
import HeroButton from '../../../../../components/HeroButton';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {Colors} from '../../../../../constants/Color';
import CustomDropdownSelector from '../../../../../components/CustomDropdownSelector';
import CustomRadioSelector from '../../../../../components/CustomRadioSelector';
import BottomSpace from '../../../../../components/BottomSpace';
import {ThemedText} from '../../../../../components/ThemedText';

type IDCardRequestModalProps = {
  isVisible: boolean;
  onClose: (val: boolean) => void;
};

const IDCardRequestModal: React.FC<IDCardRequestModalProps> = ({
  isVisible,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IdCardSchemaType>({
    resolver: zodResolver(IdCardSchema),
  });

  const onSubmit = (data: IdCardSchemaType) => {
    console.log('id card: ', data);
    onClose(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText="Cancel"
            varient="cancel"
            onPress={() => onClose(false)}
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            Request ID Card
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
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

            {/* Submit Button */}
            <HeroButton btnText="Submit" onPress={handleSubmit(onSubmit)} />
            <BottomSpace spaceHeight={'10%'} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {
    height: '90%',
    width: '100%',
    margin: 'auto',
    position: 'absolute',
    bottom: -5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  modalView: {
    backgroundColor: Colors.screenBackground,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 10,
      Color: '#000',
      Opacity: 0.5,
      Elevation: 10,
    }),
  },
  FormTitle: {textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12},
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default IDCardRequestModal;
