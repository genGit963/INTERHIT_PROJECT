// AddYogdanModal.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, StyleSheet, View, ScrollView, Platform, Alert } from 'react-native';
import {
  BanshaYogdanZSchema,
  BanshaYogdanZType,
} from '../../../../../../schema/tabs/dashboard/bansha-yogdan.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import HeroButton from '../../../../../../components/HeroButton';
import { ThemedText } from '../../../../../../components/ThemedText';
import CustomTextInput from '../../../../../../components/CustomInput';
import BottomSpace from '../../../../../../components/BottomSpace';
import { Colors } from '../../../../../../constants/Color';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import CustomDropdownSelector from '../../../../../../components/CustomDropdownSelector';
import CustomImagePickerComponent from '../../../../../../components/CustomImagePicker';
import { usePostYogdan } from '../../../../../../hooks/tabs/dashboard/yogdan';
import { Asset } from 'react-native-image-picker';

// types
type AddYogdanModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const AddYogdanModal: React.FC<AddYogdanModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BanshaYogdanZType>({
    resolver: zodResolver(BanshaYogdanZSchema),
  });

  const { loading, error, handlePostYogdan } = usePostYogdan()

  const onSubmit = async (data: BanshaYogdanZType) => {
    // console.log('formdata: ', data);

    const formData = new FormData();

    if (data.image) {
      const image = data.image as unknown as Asset;
      formData.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      } as any);
    }

    formData.append('name', data.name);
    formData.append('birthPlace', data.birthPlace);
    formData.append('desc', data.desc);
    formData.append('type', data.type);

    const Resp = await handlePostYogdan(formData)
    if (Resp) {
      // console.log("BANSHA yogdan successful", Resp);
      Alert.alert("successfully added yogdan")
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
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'>
            <ThemedText type="subtitle">Add Bansaj Yogdan</ThemedText>

            <CustomTextInput
              name="name"
              control={control}
              placeholder="Eg: Ram Bahadur Gaurgain"
              label="Name of the person"
              isRequired={true}
              error={errors.name}
            />

            <CustomTextInput
              name="birthPlace"
              control={control}
              placeholder="Eg: Namche, Solukhumbu"
              label="Birth Place"
              isRequired={true}
              error={errors.birthPlace}
            />

            {/* Yogdan Type Selector */}
            <CustomDropdownSelector
              name="type"
              control={control}
              label="Yogan Type"
              options={[
                { label: 'POLITICAL', value: 'POLITICAL' },
                { label: 'SOCIAL', value: 'SOCIAL' },
                { label: 'OTHERS', value: 'OTHERS' },
              ]}
              isRequired
            />

            <CustomImagePickerComponent isRequired label='Upload Image' control={control} errors={errors} controllerName='image' />

            <CustomTextInput
              name="desc"
              control={control}
              placeholder="Eg: अनुराधा कोइराला नेपालमा मानव बेचबिखन विरुद्ध र महिला संरक्षणको वकालत गर्ने गैर-लाभकारी संस्था माइती नेपालकी संस्थापक र निर्देशक हुन्...।"
              label="Description"
              isRequired={true}
              multiline
              style={styles.Description}
              error={errors.desc}
            />

            {/* Submit Button */}
            <HeroButton
              disabled={loading}
              btnText={loading ? "Loading..." : 'Submit'}
              onPress={handleSubmit(onSubmit)}
              style={styles.SubmitBtn}
            />
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
    // backgroundColor: 'red',
    // borderWidth: 2,
  },
  CancelButton: { width: '100%', alignItems: 'flex-end' },
  SubmitBtn: {
    borderRadius: 10,
    marginVertical: 30,
  },
  Description: { height: Platform.OS === 'ios' ? 100 : 'auto' },
});

export default AddYogdanModal;
