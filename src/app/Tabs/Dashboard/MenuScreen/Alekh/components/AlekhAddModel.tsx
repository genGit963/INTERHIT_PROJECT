// AlekhAddModal.tsx
import React from 'react';
import {Modal, StyleSheet, View, ScrollView, Platform} from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import {ThemedText} from '../../../../../../components/ThemedText';
import {Colors} from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  AlekhZType,
  AlekhZSchema,
} from '../../../../../../schema/tabs/dashboard/alekh.schema';
import CustomTextInput from '../../../../../../components/CustomInput';
import HeroButton from '../../../../../../components/HeroButton';
import CustomImagePickerComponent from '../../../../../../components/CustomImagePicker';
import {usePostAlekhs} from '../../../../../../hooks/tabs/dashboard/alekh';
import ApiError from '../../../../../../components/api/ApiError';

const AlekhAddModal = ({
  isVisible,
  modalVisibile,
}: {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AlekhZType>({
    resolver: zodResolver(AlekhZSchema),
  });

  const {loading, error, handlePostAlekhs} = usePostAlekhs();
  const onSubmit = async (data: AlekhZType) => {
    console.log('alekh data: ', data);

    await handlePostAlekhs(data).then((Response) => {
      console.log('postAlekhRes: ', Response);
    });

    if (!error) {
      modalVisibile(false);
    }
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

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}>
            <ThemedText type="subtitle">Add Alekh</ThemedText>

            {/* image upload */}
            <CustomImagePickerComponent
              label="Upload Image"
              isRequired
              errors={errors}
              controllerName="image"
              control={control}
            />
            {/* <UploadImage /> */}

            <CustomTextInput
              name="title"
              control={control}
              placeholder="Title"
              label="Alekh Title"
              isRequired={true}
              error={errors.title}
            />

            <CustomTextInput
              name="desc"
              control={control}
              placeholder="Alekh Details"
              label="Alekh Details"
              isRequired={true}
              error={errors.desc}
            />

            <CustomTextInput
              name="author"
              control={control}
              placeholder="Author Name"
              label="Author Name"
              isRequired={true}
              error={errors.author}
            />

            <CustomTextInput
              name="body"
              control={control}
              placeholder="Write Alekh"
              label="Write Alekh"
              isRequired={true}
              multiline
              style={styles.writeAlekh}
              error={errors.body}
            />

            {/* Submit Button */}
            {error && <ApiError message={error} />}
            <HeroButton
              disabled={loading}
              btnText={'Submit'}
              onPress={handleSubmit(onSubmit)}
              style={styles.SubmitBtn}
            />
            {error && <ApiError message={error} />}
          </ScrollView>
          <BottomSpace spaceHeight={'4%'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {
    height: '85%',
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

  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
    // backgroundColor: 'red',
    // borderWidth: 2,
  },
  CancelButton: {width: '100%', alignItems: 'flex-end'},
  SubmitBtn: {
    borderRadius: 10,
    marginTop: 20,
  },
  writeAlekh: {height: Platform.OS === 'ios' ? 100 : 'auto'},
});

export default AlekhAddModal;
