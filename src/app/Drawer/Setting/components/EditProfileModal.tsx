// EditProfileModal.tsx
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ScrollView, StyleSheet, View, Alert, Image } from 'react-native';
import { useForm } from 'react-hook-form';
import {
  EditProfileZSchema,
  EditProfileZType,
} from '../../../../schema/drawer/settings';
import HeroButton from '../../../../components/HeroButton';
import { ThemedText } from '../../../../components/ThemedText';
import CustomTextInput from '../../../../components/CustomInput';
import BottomSpace from '../../../../components/BottomSpace';
import { Colors } from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { stat } from '@dr.pogodin/react-native-fs';
import useTranslate from '../../../../hooks/language/translate';
import { confirmFormClose } from '../../../../utils/closeModalConfirmation';
import CustomImagePickerComponent from '../../../../components/CustomImagePicker';

type EditProfileModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  // app user redux
  const { appUser } = useSelector((state: RootState) => state.appUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileZType>({
    resolver: zodResolver(EditProfileZSchema),
    defaultValues: {
      fullName: appUser?.user.name,
      email: appUser?.user.email,
    },
  });

  const onSubmit = (data: EditProfileZType) => {
    console.log('edit profile data: ', { ...data, profilePhoto: 'photo.jpg' });
    modalVisibile(false);
  };

  const { translateLanguage } = useTranslate()

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => confirmFormClose({
        formName: translateLanguage("Edit Profile Form", "प्रोफाइल सम्पादन फारम"),
        cancelQuestion: translateLanguage(
          'Are you sure want to cancel?',
          'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
        ),
        yes: translateLanguage('YES', 'हो'),
        no: translateLanguage('NO', 'होइन'),
        callbackModalVisible: modalVisibile
      })

      }>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText={translateLanguage('Cancel', 'रद्द गर्नुहोस्')}
            varient="cancel"
            onPress={() => confirmFormClose({
              formName: translateLanguage("Edit Profile", "प्रोफाइल सम्पादन फारम"),
              cancelQuestion: translateLanguage(
                'Are you sure want to cancel?',
                'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
              ),
              yes: translateLanguage('YES', 'हो'),
              no: translateLanguage('NO', 'होइन'),
              callbackModalVisible: modalVisibile
            })}
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            {translateLanguage("Edit Profile", "प्रोफाइल सम्पादन गर्नुहोस्")}
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            {/* edit profile */}
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYCC2jZQIGbIlmStGZCbOEavSL3H58vnHidlneyF6rZMWaz579M6puhRSYgvI2505urg&usqp=CAU',
              }}
              style={styles.PPImage}
            />

            <CustomImagePickerComponent control={control} errors={errors} label='Change Image' controllerName='image' isRequired />

            {/* inputs */}
            <CustomTextInput
              name="fullName"
              placeholder="Eg: Ram Bahadur Bogati"
              control={control}
              label={translateLanguage('Full Name', 'पुरा नाम')}
              isRequired
              error={errors.fullName}
            />

            <CustomTextInput
              name="email"
              placeholder="Eg: barhau@gmail.com"
              control={control}
              defaultValue={control._defaultValues.fullName}
              label={translateLanguage('Email', 'इमेल ठेगाना')}
              isRequired
              error={errors.email}
            />

            {/* <CustomTextInput
              name="phone"
              placeholder="Eg: 9876548910"
              control={control}
              label="Phone"
              isRequired
              error={errors.phone}
            /> */}

            {/* Submit Button */}
            <HeroButton btnText={translateLanguage("Submit", "बुझाउनुहोस्")} onPress={handleSubmit(onSubmit)} />
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
    paddingHorizontal: 12,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 3,
    borderColor: Colors.muteGray,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: -4,
      Radius: 15,
      Color: '#000',
      Opacity: 0.4,
      Elevation: 8,
    }),
  },
  PPImage: {
    height: 100,
    width: 100,
    borderRadius: 60,
    resizeMode: 'cover',
    marginHorizontal: 'auto',
    marginVertical: 40,
  },
  FormTitle: { textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12 },
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default EditProfileModal;
