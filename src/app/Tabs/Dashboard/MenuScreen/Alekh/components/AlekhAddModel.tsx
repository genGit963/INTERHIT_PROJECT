// AlekhAddModal.tsx
import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import {ThemedText} from '../../../../../../components/ThemedText';
import {Colors} from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  AlekhFormDataType,
  alekhSchema,
} from '../../../../../../schema/tabs/dashboard/alekh.schema';
import CustomTextInput from '../../../../../../components/CustomInput';
import HeroButton from '../../../../../../components/HeroButton';

const AlekhAddModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: (val: boolean) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AlekhFormDataType>({
    resolver: zodResolver(alekhSchema),
  });

  const onSubmit = (data: AlekhFormDataType) => {
    console.log('formdata: ', data);
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

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}>
            <ThemedText type="subtitle">Add Alekh</ThemedText>

            <CustomTextInput
              name="alekhDetails"
              control={control}
              placeholder="Alekh Details"
              label="Alekh Details"
              isRequired={true}
              error={errors.alekhDetails}
            />

            <CustomTextInput
              name="authorName"
              control={control}
              placeholder="Author Name"
              label="Author Name"
              isRequired={true}
              error={errors.authorName}
            />

            {/* <CustomTextInput
              name="contributionType"
              control={control}
              placeholder="Contribution Type"
              label="Contribution Type"
              isRequired={true}
              error={errors.contributionType}
            /> */}

            <CustomTextInput
              name="writeAlekh"
              control={control}
              placeholder="Write Alekh"
              label="Write Alekh"
              isRequired={true}
              multiline
              style={styles.writeAlekh}
              error={errors.writeAlekh}
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
  writeAlekh: {height: Platform.OS === 'ios' ? 100 : 'auto'},
});

export default AlekhAddModal;
