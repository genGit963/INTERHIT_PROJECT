// EditProfileModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Image, Modal, ScrollView, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {
  EditProfileZSchema,
  EditProfileZType,
} from '../../../../schema/drawer/settings';
import HeroButton from '../../../../components/HeroButton';
import {ThemedText} from '../../../../components/ThemedText';
import CustomTextInput from '../../../../components/CustomInput';
import {Colors} from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import useTranslate from '../../../../hooks/language/translate';
import {confirmFormClose} from '../../../../utils/closeModalConfirmation';
import {Asset} from 'react-native-image-picker';
import ChangeProfileImage from './ChangePP';

type EditProfileModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  // app user redux
  const {appUser} = useSelector((state: RootState) => state.appUser);

  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<EditProfileZType>({
    resolver: zodResolver(EditProfileZSchema),
    defaultValues: {
      image: appUser?.user.imgurl,
      fullName: appUser?.user.name,
      email: appUser?.user.email,
    },
  });

  const onSubmit = async (data: EditProfileZType) => {
    console.log('handlePostAlekhs data: ', data);
    const formData = new FormData();

    if (data.image) {
      const image = data.image as unknown as Asset;
      formData.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      } as any);
    }

    formData.append('fullName', data.fullName);
    formData.append('email', data.email);

    console.log('Edit profile data: ', formData);

    if (formData) {
      modalVisibile(false);
    }

    // const response = await handlePostAlekhs(formData);

    // if (response) {
    //   console.log('postAlekhRes: ', response);
    //   Alert.alert('Post Alekh', 'Alekh is posted successfully');
    //   modalVisibile(false);
    // }
  };

  const watchImage = watch('image');
  // console.log('\n\n\n image change: ', watchImage);

  const {translateLanguage} = useTranslate();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onTouchCancel={() => {
        modalVisibile(false);
      }}
      onRequestClose={() =>
        confirmFormClose({
          formName: translateLanguage(
            'Edit Profile Form',
            'प्रोफाइल सम्पादन फारम',
          ),
          cancelQuestion: translateLanguage(
            'Are you sure want to cancel?',
            'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
          ),
          yes: translateLanguage('YES', 'हो'),
          no: translateLanguage('NO', 'होइन'),
          callbackModalVisible: modalVisibile,
        })
      }>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText={translateLanguage('Cancel', 'रद्द गर्नुहोस्')}
            varient="cancel"
            onPress={() =>
              confirmFormClose({
                formName: translateLanguage(
                  'Edit Profile',
                  'प्रोफाइल सम्पादन फारम',
                ),
                cancelQuestion: translateLanguage(
                  'Are you sure want to cancel?',
                  'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
                ),
                yes: translateLanguage('YES', 'हो'),
                no: translateLanguage('NO', 'होइन'),
                callbackModalVisible: modalVisibile,
              })
            }
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            {translateLanguage('Edit Profile', 'प्रोफाइल सम्पादन गर्नुहोस्')}
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            {/* edit profile */}
            <Image
              source={{
                // uri: 'https://www.lensnepal.com/files/profiles/nikhil-upreti.jpg',
                uri: watchImage?.uri ? watchImage.uri : watchImage,
              }}
              style={styles.PPImage}
            />

            <ChangeProfileImage
              label={translateLanguage(
                'Change Image',
                'छवि परिवर्तन गर्नुहोस्',
              )}
              isRequired={false}
              errors={errors}
              controllerName="image"
              control={control}
            />

            {/* inputs */}
            <CustomTextInput
              name="fullName"
              placeholder="Eg: Ram Bahadur Bogati"
              control={control}
              label={translateLanguage('Full Name', 'पुरा नाम')}
              isRequired={false}
              error={errors.fullName}
            />

            <CustomTextInput
              name="email"
              placeholder="Eg: barhau@gmail.com"
              control={control}
              defaultValue={control._defaultValues.fullName}
              label={translateLanguage('Email', 'इमेल ठेगाना')}
              isRequired={false}
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
            <HeroButton
              btnText={translateLanguage('Submit', 'बुझाउनुहोस्')}
              onPress={handleSubmit(onSubmit)}
            />
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
    height: 160,
    width: 160,
    borderRadius: 100,
    resizeMode: 'cover',
    marginHorizontal: 'auto',
    marginTop: 40,
  },
  FormTitle: {textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12},
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default EditProfileModal;
