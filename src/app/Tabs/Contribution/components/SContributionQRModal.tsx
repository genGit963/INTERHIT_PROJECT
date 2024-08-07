import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeroButton from '../../../../components/HeroButton';
import BottomSpace from '../../../../components/BottomSpace';
import GenerateQR from '../../../../utils/generateQR';
import supplyShadowEffect from '../../../../utils/Shadow';
import {Colors} from '../../../../constants/Color';
import {ThemedText} from '../../../../components/ThemedText';

const SoceityContributionQRModal = ({
  isVisible,
  onClose,
  data,
}: {
  isVisible: boolean;
  onClose: (val: boolean) => void;
  data: string;
}) => {
  const jsonData = JSON.parse(data);
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
          {/* done model */}
          <HeroButton
            btnText="Done"
            varient="done"
            onPress={() => onClose(false)}
          />

          {/* QR View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* QR */}
            <View style={styles.QRView}>
              <GenerateQR data={data} />
            </View>

            {/* Contribution data Detail  */}
            <View style={styles.ContributionDetailView}>
              <ThemedText type="semiBold">
                Bank Name: {jsonData.bankName}
              </ThemedText>
              <ThemedText type="semiBold">
                Account Name: {jsonData.accountName}
              </ThemedText>
              <ThemedText type="semiBold">
                Account No: {jsonData.accountNo}
              </ThemedText>
            </View>

            {/* Other detail Contribution */}
            <View style={styles.ContributionClaimView}>
              <ThemedText>Added Contribution ?? </ThemedText>
              <TouchableOpacity
                onPress={() => console.log('Claim Contribution')}>
                <ThemedText type="link">Claim Contribution</ThemedText>
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: 12,
    height: '100%',

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 10,
      Color: '#000',
      Opacity: 0.3,
      Elevation: 4,
    }),
  },
  ScorllContainer: {width: '100%', paddingHorizontal: 10},
  QRView: {
    marginVertical: 10,
  },
  ContributionDetailView: {
    margin: 'auto',
    alignItems: 'center',
  },
  ContributionClaimView: {
    marginTop: 10,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SoceityContributionQRModal;
