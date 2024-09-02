// IDCardRequestModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Alert,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import CustomTextInput from '../../../../../components/CustomInput';
import HeroButton from '../../../../../components/HeroButton';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {Colors} from '../../../../../constants/Color';
import CustomDropdownSelector from '../../../../../components/CustomDropdownSelector';
import CustomRadioSelector from '../../../../../components/CustomRadioSelector';
import BottomSpace from '../../../../../components/BottomSpace';
import {ThemedText} from '../../../../../components/ThemedText';
import {
  IdCardZSchema,
  IdCardZType,
} from '../../../../../schema/drawer/profile/id-card.schema';
import CustomImagePickerComponent from '../../../../../components/CustomImagePicker';
import {useRequestIdCard} from '../../../../../hooks/drawer/profile/idCard';
import {Asset} from 'react-native-image-picker';

type IDCardRequestModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const IDCardRequestModal: React.FC<IDCardRequestModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IdCardZType>({
    resolver: zodResolver(IdCardZSchema),
  });

  const {loading, error, handleRequestIdCard} = useRequestIdCard();
  const onSubmit = async (data: IdCardZType) => {
    const formData = new FormData();

    if (data.image) {
      const image = data.image as unknown as Asset;
      formData.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      } as any);
    }

    formData.append('full_name', data.full_name);
    formData.append('birth_date', data.birth_date);
    formData.append('birth_place', data.birth_place);
    formData.append('gender', data.gender);
    formData.append('blood_group', data.blood_group);
    formData.append('province', data.province);
    formData.append('local', data.local);
    formData.append('ward', data.ward);
    formData.append('contact', data.contact);
    formData.append('org_position', data.org_position);
    formData.append('profession', data.profession);
    formData.append('district', data.district);

    console.log('id card: ', formData);
    await handleRequestIdCard(formData).then((Resp) => {
      if (Resp) {
        console.log('Id card request successful');
        Alert.alert('Id card request successful');
        modalVisibile(false);
      } else {
        console.log('Request id card failed', Resp);
      }
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        modalVisibile(false);
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText="Cancel"
            varient="cancel"
            onPress={() => modalVisibile(false)}
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            Request ID Card
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            <CustomTextInput
              name="full_name"
              control={control}
              label="Full Name"
              isRequired
              error={errors.full_name}
            />

            <CustomImagePickerComponent
              isRequired
              control={control}
              errors={errors}
              label="Upload your image"
              controllerName="image"
            />

            {/* date of birth */}
            <CustomTextInput
              name="birth_date"
              control={control}
              label="Date of Birth"
              placeholder="Eg: 2078/01/20"
              isRequired
              error={errors.birth_date}
            />

            <CustomTextInput
              name="birth_place"
              control={control}
              label="Birth Place"
              isRequired
              error={errors.birth_place}
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
              name="blood_group"
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
                {label: 'कोशी प्रदेश', value: 'कोशी प्रदेश'},
                {label: 'मधेश प्रदेश', value: 'मधेश प्रदेश'},
                {label: 'बागमती प्रदेश', value: 'बागमती प्रदेश'},
                {label: 'गण्डकी प्रदेश', value: 'गण्डकी प्रदेश'},
                {label: 'लुम्बिनी प्रदेश', value: 'लुम्बिनी प्रदेश'},
                {label: 'कर्णाली प्रदेश', value: 'कर्णाली प्रदेश'},
                {
                  label: 'सुदूर पश्चिमाञ्च प्रदेश',
                  value: 'सुदूर पश्चिमाञ्च प्रदेश',
                },
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
              name="local"
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
              name="ward"
              control={control}
              label="Ward No."
              isRequired
              error={errors.ward}
            />

            <CustomTextInput
              name="contact"
              control={control}
              label="Contact"
              isRequired
              keyboardType="phone-pad"
              error={errors.contact}
            />

            <CustomTextInput
              name="profession"
              control={control}
              label="Profession"
              error={errors.profession}
              isRequired={false}
            />

            <CustomTextInput
              name="org_position"
              control={control}
              label="Organizational Post"
              error={errors.org_position}
              isRequired
            />

            {/* Submit Button */}
            <HeroButton
              disabled={loading}
              btnText={loading ? 'Loading...' : 'Submit'}
              onPress={handleSubmit(onSubmit)}
            />
            {error && <ThemedText>{error}</ThemedText>}
            <BottomSpace spaceHeight={'10%'} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {
    height: Platform.OS === 'ios' ? '94%' : '99%',
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
