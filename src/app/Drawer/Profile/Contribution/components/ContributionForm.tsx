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

  const onSubmit = (data: ContributionClaimType) => {
    console.log('contribution data: ', data);
    modalVisibile(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Contribution Claim Form', 'Are you sure want to cancel?', [
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
            Claim Your Contribution
          </ThemedText>
          <ScrollView
            style={styles.ScrollContainer}
            showsVerticalScrollIndicator={false}>
            <CustomTextInput
              name="fullName"
              placeholder="Eg: Ram Bogati"
              control={control}
              label="Full Name"
              isRequired
              error={errors.fullName}
            />

            <CustomTextInput
              name="address"
              placeholder="Eg: Rupandehi, Khotang"
              control={control}
              label="Address"
              isRequired
              error={errors.address}
            />

            <CustomDropdownSelector
              name="contributionType"
              control={control}
              label="Contribution Type"
              options={[
                {label: 'Donation', value: 'Donation'},
                {label: 'Funding', value: 'Funding'},
                {label: 'Crowd Funding', value: 'CrowdFunding'},
              ]}
              isRequired
            />

            <CustomDropdownSelector
              name="modeofPayment"
              control={control}
              label="Mode of Payment"
              options={[
                {label: 'Khalti', value: 'Khalti'},
                {label: 'Esewa', value: 'Esewa'},
                {label: 'IME Pay', value: 'IMEpay'},
              ]}
              isRequired
            />

            <CustomTextInput
              name="amount"
              placeholder="Eg: 400000"
              keyboardType="numeric"
              inputMode="numeric"
              control={control}
              label="Amount"
              isRequired
              error={errors.amount}
            />

            <CustomTextInput
              name="purpose"
              placeholder="Eg: KulMandir Construction"
              control={control}
              label="Purpose"
              isRequired
              error={errors.purpose}
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
  FormTitle: {textAlign: 'left', width: '100%', fontSize: 18, marginBottom: 12},
  ScrollContainer: {
    width: '100%',
    marginBottom: 50,
  },
});

export default ContributionFormModal;
