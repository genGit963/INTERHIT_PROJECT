// AddYogdanModal.tsx
import React from 'react';
import {useForm} from 'react-hook-form';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {
  BanshaYogdanZSchema,
  BanshaYogdanZType,
} from '../../../../../../schema/tabs/dashboard/bansha-yogdan.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import HeroButton from '../../../../../../components/HeroButton';
import {ThemedText} from '../../../../../../components/ThemedText';
import CustomTextInput from '../../../../../../components/CustomInput';
import BottomSpace from '../../../../../../components/BottomSpace';
import {Colors} from '../../../../../../constants/Color';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import CustomDropdownSelector from '../../../../../../components/CustomDropdownSelector';
import CustomImagePickerComponent from '../../../../../../components/CustomImagePicker';
import {usePostYogdan} from '../../../../../../hooks/tabs/dashboard/yogdan';
import {Asset} from 'react-native-image-picker';
import useTranslate from '../../../../../../hooks/language/translate';

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
    formState: {errors},
  } = useForm<BanshaYogdanZType>({
    resolver: zodResolver(BanshaYogdanZSchema),
  });

  const {loading, error, handlePostYogdan} = usePostYogdan();

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

    const Resp = await handlePostYogdan(formData);
    if (Resp) {
      // console.log("BANSHA yogdan successful", Resp);
      Alert.alert('successfully added yogdan');
      modalVisibile(false);
    }
  };

  const {translateLanguage} = useTranslate();

  const addYogdanLabels = {
    modalTitle: translateLanguage('Add Bansha Yogdan', 'बंश योगदान थप्नुहोस्'),
    name: translateLanguage('Name of the person', 'लेखकको नाम'),
    birth_place: translateLanguage('Birth Place', 'विवरणहरू'),
    type: translateLanguage('Yogdan Type', 'बंश योगदान'),
    image: translateLanguage('Upload Image', 'फोटो अपलोड गर्नुहोस्'),
    description: translateLanguage('Description', 'विवरणहरू'),
    submit: translateLanguage('Submit', 'बुझाउनुहोस्'),
    loading: translateLanguage('Loading...', 'पेस गर्दै...'),
    cancel: translateLanguage('Cancel', 'रद्द गर्नुहोस्'),
    formName: translateLanguage('Bansha Yogdan Form', 'बंश योगदान फारम'),
    cancelQuestion: translateLanguage(
      'Are you sure want to cancel?',
      'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
    ),
    yes: translateLanguage('YES', 'हो'),
    no: translateLanguage('NO', 'होइन'),
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert(addYogdanLabels.formName, addYogdanLabels.cancelQuestion, [
          {
            text: addYogdanLabels.yes,
            onPress: () => modalVisibile(false),
          },
          {
            text: addYogdanLabels.no,
            onPress: () => {},
          },
        ]);
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText={addYogdanLabels.cancel}
            varient="cancel"
            onPress={() => modalVisibile(false)}
          />

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <ThemedText type="subtitle">
              {addYogdanLabels.modalTitle}
            </ThemedText>

            <CustomTextInput
              name="name"
              control={control}
              placeholder="Eg: Ram Bahadur Gaurgain"
              label={addYogdanLabels.name}
              isRequired={true}
              error={errors.name}
            />

            <CustomTextInput
              name="birthPlace"
              control={control}
              placeholder="Eg: Namche, Solukhumbu"
              label={addYogdanLabels.birth_place}
              isRequired={true}
              error={errors.birthPlace}
            />

            {/* Yogdan Type Selector */}
            <CustomDropdownSelector
              name="type"
              control={control}
              label={addYogdanLabels.type}
              options={[
                {label: 'POLITICAL', value: 'POLITICAL'},
                {label: 'SOCIAL', value: 'SOCIAL'},
                {label: 'OTHERS', value: 'OTHERS'},
              ]}
              isRequired
            />

            <CustomImagePickerComponent
              isRequired
              label="Upload Image"
              control={control}
              errors={errors}
              controllerName="image"
            />

            <CustomTextInput
              name="desc"
              control={control}
              placeholder="Eg: अनुराधा कोइराला नेपालमा मानव बेचबिखन विरुद्ध र महिला संरक्षणको वकालत गर्ने गैर-लाभकारी संस्था माइती नेपालकी संस्थापक र निर्देशक हुन्...।"
              label={addYogdanLabels.description}
              isRequired={true}
              multiline
              style={styles.Description}
              error={errors.desc}
            />

            {/* Submit Button */}
            <HeroButton
              disabled={loading}
              btnText={
                loading ? addYogdanLabels.loading : addYogdanLabels.submit
              }
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
  CancelButton: {width: '100%', alignItems: 'flex-end'},
  SubmitBtn: {
    borderRadius: 10,
    marginVertical: 30,
  },
  Description: {height: Platform.OS === 'ios' ? 100 : 'auto'},
});

export default AddYogdanModal;
