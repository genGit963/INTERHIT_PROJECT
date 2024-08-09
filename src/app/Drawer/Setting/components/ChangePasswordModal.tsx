// ChangePasswordModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Modal, ScrollView, StyleSheet, View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import HeroButton from '../../../../components/HeroButton';
import {ThemedText} from '../../../../components/ThemedText';
import CustomTextInput from '../../../../components/CustomInput';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';
import {
  ChangePasswordZSchema,
  ChangePasswordZType,
} from '../../../../schema/drawer/settings';

type ChangePasswordModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ChangePasswordZType>({
    resolver: zodResolver(ChangePasswordZSchema),
  });

  const onSubmit = (data: ChangePasswordZType) => {
    console.log('change password data: ', data);
    modalVisibile(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Change Password', 'Are you sure want to cancel?', [
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
            Manage Password
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            {/* inputs */}
            <CustomTextInput
              name="currentPassword"
              control={control}
              label="Current Password"
              isRequired
              error={errors.currentPassword}
            />

            <CustomTextInput
              name="newPassword"
              control={control}
              label="New Password"
              isRequired
              error={errors.newPassword}
            />

            <CustomTextInput
              name="confirmPassword"
              control={control}
              label="Confirm Password"
              isRequired
              error={errors.confirmPassword}
            />

            {/* Submit Button */}
            <HeroButton btnText="Confirm" onPress={handleSubmit(onSubmit)} />
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
  FormTitle: {textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12},
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default ChangePasswordModal;
