import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { ThemedText } from '../../../../../../components/ThemedText';
import { Colors } from '../../../../../../constants/Color';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlekhZType,
  AlekhZSchema,
} from '../../../../../../schema/tabs/dashboard/alekh.schema';
import CustomTextInput from '../../../../../../components/CustomInput';
import HeroButton from '../../../../../../components/HeroButton';
import CustomImagePickerComponent from '../../../../../../components/CustomImagePicker';
import { usePostAlekhs } from '../../../../../../hooks/tabs/dashboard/alekh';
import ApiError from '../../../../../../components/api/ApiError';
import { Asset } from 'react-native-image-picker';

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
    formState: { errors },
  } = useForm<AlekhZType>({
    resolver: zodResolver(AlekhZSchema),
  });

  const { loading, error, handlePostAlekhs } = usePostAlekhs();

  const onSubmit = async (data: AlekhZType) => {
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

    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('author', data.author);
    formData.append('body', data.body);

    const response = await handlePostAlekhs(formData);

    if (response) {
      console.log('postAlekhRes: ', response);
      Alert.alert('Post Alekh', 'Alekh is posted successfully');
      modalVisibile(false)
    }
    // if (!error) {
    //   modalVisibile(false);
    // }
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
          <HeroButton
            btnText="Cancel"
            varient="cancel"
            onPress={() => modalVisibile(false)}
          />

          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            <ThemedText type="subtitle">Add Alekh</ThemedText>

            <CustomImagePickerComponent
              label="Upload Image"
              isRequired
              errors={errors}
              controllerName="image"
              control={control}
            />

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

            {error && <ApiError message={error} />}
            <HeroButton
              disabled={loading}
              btnText={loading ? "Loading..." : 'Submit'}
              onPress={handleSubmit(onSubmit)}
              style={styles.SubmitBtn}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {
    height: '85%',
    width: '100%',
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'relative',
  },
  ScrollContainer: {
    width: '100%',
    marginBottom: 10,
  },
  writeAlekh: {
    height: 150,
  },
  SubmitBtn: {
    marginTop: Platform.OS === 'android' ? 20 : 10,
    marginBottom: Platform.OS === 'android' ? 70 : 30,
  },
});

export default AlekhAddModal;
