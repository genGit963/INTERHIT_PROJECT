// ChangePasswordModal.tsx
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ScrollView, StyleSheet, View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import HeroButton from '../../../../components/HeroButton';
import { ThemedText } from '../../../../components/ThemedText';
import CustomTextInput from '../../../../components/CustomInput';
import BottomSpace from '../../../../components/BottomSpace';
import { Colors } from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';
import {
  ChangePasswordZSchema,
  ChangePasswordZType,
} from '../../../../schema/drawer/settings';
import { confirmFormClose } from '../../../../utils/closeModalConfirmation';
import useTranslate from '../../../../hooks/language/translate';

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
    formState: { errors },
  } = useForm<ChangePasswordZType>({
    resolver: zodResolver(ChangePasswordZSchema),
  });

  const onSubmit = (data: ChangePasswordZType) => {
    console.log('change password data: ', data);
    modalVisibile(false);
  };

  const { translateLanguage } = useTranslate()

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => confirmFormClose({
        formName: translateLanguage("Edit Profile", "पासवर्ड प्रबन्ध फारम"),
        cancelQuestion: translateLanguage(
          'Are you sure want to cancel?',
          'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
        ),
        yes: translateLanguage('YES', 'हो'),
        no: translateLanguage('NO', 'होइन'),
        callbackModalVisible: modalVisibile
      })}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText={translateLanguage('Cancel', 'रद्द गर्नुहोस्')}
            varient="cancel"
            onPress={() => confirmFormClose({
              formName: translateLanguage("Manage Password Form", "पासवर्ड प्रबन्ध फारम"),
              cancelQuestion: translateLanguage(
                'Are you sure want to cancel?',
                'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
              ),
              yes: translateLanguage('YES', 'हो'),
              no: translateLanguage('NO', 'होइन'),
              callbackModalVisible: modalVisibile
            })}
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            {translateLanguage("Manage Password", "पासवर्ड प्रबन्ध")}
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            {/* inputs */}
            <CustomTextInput
              name="currentPassword"
              control={control}
              label={translateLanguage("Current Password", "हालको पासवर्ड")}
              isRequired
              error={errors.currentPassword}
            />

            <CustomTextInput
              name="newPassword"
              control={control}
              label={translateLanguage("New Password", "नयाँ पासवर्ड")}
              isRequired
              error={errors.newPassword}
            />

            <CustomTextInput
              name="confirmPassword"
              control={control}
              label={translateLanguage("Confirm Password", "पासवर्ड पुष्टि गर्नुहोस्")}
              isRequired
              error={errors.confirmPassword}
            />

            {/* Submit Button */}
            <HeroButton btnText={translateLanguage("Confirm", "पुष्टि गर्नुहोस्")} onPress={handleSubmit(onSubmit)} />
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
  FormTitle: { textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12 },
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default ChangePasswordModal;
