// EditProfileModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Modal, ScrollView, StyleSheet, View, Alert, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import {
  EditProfileZSchema,
  EditProfileZType,
} from '../../../../schema/drawer/settings';
import HeroButton from '../../../../components/HeroButton';
import {ThemedText} from '../../../../components/ThemedText';
import CustomTextInput from '../../../../components/CustomInput';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';

type EditProfileModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<EditProfileZType>({
    resolver: zodResolver(EditProfileZSchema),
  });

  const onSubmit = (data: EditProfileZType) => {
    console.log('edit profile data: ', {...data, profilePhoto: 'photo.jpg'});
    modalVisibile(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Edit Profile', 'Are you sure want to cancel?', [
          {
            text: 'Yes',
            onPress: () => modalVisibile(false),
          },
          {
            text: 'No',
            onPress: () => {},
          },
        ]);
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
            Edit Profile
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

            {/* inputs */}
            <CustomTextInput
              name="fullName"
              placeholder="Eg: Ram Bahadur Bogati"
              control={control}
              label="Full Name"
              isRequired
              error={errors.fullName}
            />

            <CustomTextInput
              name="email"
              placeholder="Eg: barhau@gmail.com"
              control={control}
              label="Email"
              isRequired
              error={errors.email}
            />

            <CustomTextInput
              name="phone"
              placeholder="Eg: 9876548910"
              control={control}
              label="Phone"
              isRequired
              error={errors.phone}
            />

            {/* Submit Button */}
            <HeroButton btnText="Submit" onPress={handleSubmit(onSubmit)} />
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
  PPImage: {
    height: 100,
    width: 100,
    borderRadius: 60,
    resizeMode: 'cover',
    marginHorizontal: 'auto',
    marginVertical: 40,
  },
  FormTitle: {textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12},
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default EditProfileModal;
