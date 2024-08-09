// AddYogdanModal.tsx
import React from 'react';
import {useForm} from 'react-hook-form';
import {Modal, StyleSheet, View, ScrollView, Platform} from 'react-native';
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

  const onSubmit = (data: BanshaYogdanZType) => {
    console.log('formdata: ', data);
    modalVisibile(false);
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
            <ThemedText type="subtitle">Add Bansaj Yogdan</ThemedText>

            <CustomTextInput
              name="fullName"
              control={control}
              placeholder="Eg: Ram Bahadur Gaurgain"
              label="Name of the person"
              isRequired={true}
              error={errors.fullName}
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
              name="yogdanType"
              control={control}
              label="Yogan Type"
              options={[
                {label: 'Political', value: 'Political'},
                {label: 'Social', value: 'Social'},
                {label: 'Other', value: 'Other'},
              ]}
              isRequired
            />

            <CustomTextInput
              name="description"
              control={control}
              placeholder="Eg: अनुराधा कोइराला नेपालमा मानव बेचबिखन विरुद्ध र महिला संरक्षणको वकालत गर्ने गैर-लाभकारी संस्था माइती नेपालकी संस्थापक र निर्देशक हुन्...।"
              label="Description"
              isRequired={true}
              multiline
              style={styles.Description}
              error={errors.description}
            />

            {/* Submit Button */}
            <HeroButton
              btnText={'Submit'}
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
