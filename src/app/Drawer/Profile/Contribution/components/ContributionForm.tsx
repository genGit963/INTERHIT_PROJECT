// ContributionFormModal.tsx
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Modal, ScrollView, StyleSheet, View, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import CustomTextInput from '../../../../../components/CustomInput';
import HeroButton from '../../../../../components/HeroButton';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {Colors} from '../../../../../constants/Color';
import CustomDropdownSelector from '../../../../../components/CustomDropdownSelector';
import BottomSpace from '../../../../../components/BottomSpace';
import {ThemedText} from '../../../../../components/ThemedText';
import {
  ContributionClaimType,
  ContributionClaimZSchema,
} from '../../../../../schema/drawer/profile/contribution-claim.schema';
import CustomImagePickerComponent from '../../../../../components/CustomImagePicker';
import {useClaimContribution} from '../../../../../hooks/drawer/profile/contribution';
import {Asset} from 'react-native-image-picker';
import ApiError from '../../../../../components/api/ApiError';
import useTranslate from '../../../../../hooks/language/translate';

type ContributionFormModalProps = {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
};

const ContributionFormModal: React.FC<ContributionFormModalProps> = ({
  isVisible,
  modalVisibile,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ContributionClaimType>({
    resolver: zodResolver(ContributionClaimZSchema),
  });

  const {loading, error, handleClaimContribution} = useClaimContribution();

  const onSubmit = async (data: ContributionClaimType) => {
    console.log('contribution data: ', data);

    const formData = new FormData();

    if (data.receipt_photo) {
      const receipt_image = data.receipt_photo as unknown as Asset;

      formData.append('receipt_photo', {
        uri: receipt_image.uri,
        name: receipt_image.fileName,
        type: receipt_image.type,
      } as any);
    }

    if (data.contributor_image) {
      const contributor_image = data.contributor_image as unknown as Asset;
      formData.append('contributor_image', {
        uri: contributor_image.uri,
        name: contributor_image.fileName,
        type: contributor_image.type,
      } as any);
    }

    formData.append('full_name', data.full_name);
    formData.append('phone', data.phone);
    formData.append('amount', data.amount);
    formData.append('eventId', data.eventId);
    formData.append('purpose', data.purpose);

    const Resp = await handleClaimContribution(formData);

    if (Resp) {
      console.log('Contribution claim successful', Resp);
      Alert.alert('Contribution claim successful');
      modalVisibile(false);
    }
  };

  const {translateLanguage} = useTranslate();

  const claimContributionLabels = {
    formName: translateLanguage('Contribution Claim Form', 'योगदान दावी फारम'),
    modalTitle: translateLanguage(
      'Claim your Contribution',
      'आफ्नो योगदान दावी गर्नुहोस्',
    ),
    cancelQuestion: translateLanguage(
      'Are you sure want to cancel?',
      'के तपाईँ निश्चित रूपमा रद्द गर्न चाहनुहुन्छ?',
    ),
    yes: translateLanguage('YES', 'हो'),
    no: translateLanguage('NO', 'होइन'),
    full_name: translateLanguage('Full Name', 'पूरा नाम'),
    phone: translateLanguage('Phone', ' फोन नम्बर'),
    amount: translateLanguage('Amount', 'रकम'),
    eventId: translateLanguage('Event Id', 'कार्यक्रम ID'),
    receiptImage: translateLanguage('Receipt Image', 'रसिद फोटो'),
    contributorImage: translateLanguage(
      'Contributor Image',
      'योगदानकर्ताको फोटो',
    ),
    purpose: translateLanguage('Purpose', 'उद्देश्य'),
    submit: translateLanguage('Submit', 'बुझाउनुहोस्'),
    loading: translateLanguage('Loading...', 'पेस गर्दै...'),
    cancel: translateLanguage('Cancel', 'रद्द गर्नुहोस्'),
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert(
          claimContributionLabels.formName,
          claimContributionLabels.cancelQuestion,
          [
            {
              text: claimContributionLabels.yes,
              onPress: () => modalVisibile(false),
            },
            {
              text: claimContributionLabels.no,
              onPress: () => {},
            },
          ],
        );
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Cancel btn */}
          <HeroButton
            btnText={claimContributionLabels.cancel}
            varient="cancel"
            onPress={() => modalVisibile(false)}
          />
          {/* form title */}
          <ThemedText type="subtitle" style={styles.FormTitle}>
            {claimContributionLabels.modalTitle}
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            <CustomTextInput
              name="full_name"
              placeholder="Eg: Ram Bogati"
              control={control}
              label={claimContributionLabels.full_name}
              isRequired
              error={errors.full_name}
            />

            <CustomTextInput
              name="phone"
              placeholder="Eg: 98XXXXXXXX"
              keyboardType="numeric"
              inputMode="numeric"
              control={control}
              label={claimContributionLabels.phone}
              isRequired
              error={errors.phone}
            />

            {/* <CustomDropdownSelector
              name="modeofPayment"
              control={control}
              label="Mode of Payment"
              options={[
                {label: 'Khalti', value: 'Khalti'},
                {label: 'Esewa', value: 'Esewa'},
                {label: 'IME Pay', value: 'IMEpay'},
              ]}
              isRequired
            /> */}

            <CustomTextInput
              name="amount"
              placeholder="Eg: 400000"
              keyboardType="numeric"
              inputMode="numeric"
              control={control}
              label={claimContributionLabels.amount}
              isRequired
              error={errors.amount}
            />

            <CustomTextInput
              name="eventId"
              placeholder="Eg: 4JQR56"
              keyboardType="numeric"
              inputMode="numeric"
              control={control}
              label={claimContributionLabels.eventId}
              isRequired={false}
              error={errors.eventId}
            />

            <CustomTextInput
              name="purpose"
              placeholder="Eg: KulMandir Construction"
              control={control}
              label={claimContributionLabels.purpose}
              isRequired
              error={errors.purpose}
            />

            {/* receipt photo and contributor_image left */}
            <CustomImagePickerComponent
              isRequired
              label={claimContributionLabels.receiptImage}
              control={control}
              errors={errors}
              controllerName="receipt_photo"
            />

            <CustomImagePickerComponent
              isRequired
              label={claimContributionLabels.contributorImage}
              control={control}
              errors={errors}
              controllerName="contributor_image"
            />

            {/* Submit Button */}
            <HeroButton
              disabled={loading}
              btnText={
                loading
                  ? claimContributionLabels.loading
                  : claimContributionLabels.submit
              }
              onPress={handleSubmit(onSubmit)}
            />
            {error && <ApiError message={error} />}
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

export default ContributionFormModal;
