// LiteratureAddModal.tsx
import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import {ThemedText} from '../../../../../../components/ThemedText';
import {Colors} from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import CustomTextInput from '../../../../../../components/CustomInput';
import HeroButton from '../../../../../../components/HeroButton';
import {
  literatureZSchema,
  LiteratureZType,
} from '../../../../../../schema/tabs/dashboard/literature.schema';
import CustomImagePickerComponent from '../../../../../../components/CustomImagePicker';
import {Asset} from 'react-native-image-picker';
import {usePostLiterature} from '../../../../../../hooks/tabs/dashboard/literature';
import useTranslate from '../../../../../../hooks/language/translate';

const LiteratureAddModal = ({
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
  } = useForm<LiteratureZType>({
    resolver: zodResolver(literatureZSchema),
  });

  const {translateLanguage} = useTranslate();

  const {loading, error, handlePostLiterature} = usePostLiterature();

  const onSubmit = async (data: LiteratureZType) => {
    // console.log('literature onsubmit formdata: ', data);

    const formData = new FormData();
    if (data.image) {
      const image = data.image as unknown as Asset;
      console.log('image from litt: ', image);
      formData.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      } as any);
    }
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('birth_place', data.birth_place);
    formData.append('content', data.content);

    const response = await handlePostLiterature(formData);
    if (response) {
      // console.log("Literature post successful");
      Alert.alert(
        'Literature is posted succesfully. The admin will review and verify the literature.',
      );
      modalVisibile(false);
    }
  };

  const addLiteratureLabels = {
    modalTitle: translateLanguage('Add Literature', 'साहित्य थप्नुहोस्'),
    image: translateLanguage('Upload Image', 'फोटो अपलोड गर्नुहोस्'),
    title: translateLanguage('Literature Title', 'साहित्य शीर्षक'),
    birth_place: translateLanguage('Birth Place', 'विवरणहरू'),
    author: translateLanguage('Author Name', 'लेखकको नाम'),
    write_literature: translateLanguage('Write Alekh', 'साहित्य लेख्नुहोस्'),
    submit: translateLanguage('Submit', 'बुझाउनुहोस्'),
    loading: translateLanguage('Loading...', 'पेस गर्दै...'),
    cancel: translateLanguage('Cancel', 'रद्द गर्नुहोस्'),
    formName: translateLanguage('Literature Form', 'साहित्य फारम'),
    cancelQuestion: translateLanguage(
      'Are you sure want to cancel?',
      'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
    ),
    yes: translateLanguage('YES', 'हो'),
    no: translateLanguage('NO', 'होइन'),
  };

  const requestClose = () => {
    Alert.alert(
      addLiteratureLabels.formName,
      addLiteratureLabels.cancelQuestion,
      [
        {
          text: addLiteratureLabels.yes,
          onPress: () => modalVisibile(false),
        },
        {
          text: addLiteratureLabels.no,
          onPress: () => {},
        },
      ],
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={requestClose}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* cancel btn */}
          <HeroButton
            btnText={addLiteratureLabels.cancel}
            varient="cancel"
            onPress={requestClose}
          />

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <ThemedText type="subtitle">
              {addLiteratureLabels.modalTitle}
            </ThemedText>

            {/* author_image baaki chha */}

            <CustomTextInput
              name="title"
              control={control}
              placeholder="Eg: Literature title"
              label={addLiteratureLabels.title}
              isRequired={true}
              error={errors.title}
            />

            <CustomTextInput
              name="author"
              control={control}
              placeholder="Eg: Ram Bahadur Shrestha"
              label={addLiteratureLabels.author}
              isRequired={true}
              error={errors.author}
            />

            <CustomTextInput
              name="birth_place"
              control={control}
              placeholder="Eg: Dharan, Sunsari"
              label={addLiteratureLabels.birth_place}
              isRequired={true}
              error={errors.birth_place}
            />

            <CustomImagePickerComponent
              isRequired
              controllerName="image"
              label={addLiteratureLabels.image}
              control={control}
              errors={errors}
            />

            <CustomTextInput
              name="content"
              control={control}
              placeholder="Eg: सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू....  "
              label={addLiteratureLabels.write_literature}
              isRequired={true}
              multiline
              style={styles.writeLiterature}
              error={errors.content}
            />

            {/* Submit Button */}
            <HeroButton
              disabled={loading}
              btnText={
                loading
                  ? addLiteratureLabels.loading
                  : addLiteratureLabels.submit
              }
              style={styles.SubmitBtn}
              onPress={handleSubmit(onSubmit)}
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

  ScrollContainer: {
    width: '100%',
    // backgroundColor: 'red',
    // borderWidth: 2,
  },
  SubmitBtn: {marginVertical: 30},
  writeLiterature: {
    height: 100,
  },
});

export default LiteratureAddModal;
