import React, {useRef} from 'react';
import {Modal, StyleSheet, View, ScrollView} from 'react-native';
import HeroButton from '../../../../components/HeroButton';
import BottomSpace from '../../../../components/BottomSpace';
import GenerateQR from '../../../../utils/generateQR';
import supplyShadowEffect from '../../../../utils/Shadow';
import {Colors} from '../../../../constants/Color';
import {shareQRCode} from '../../../../utils/shareQR';

const ShowMyQRModal = ({
  isVisible,
  modalVisibile,
  data,
}: {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
  data: string;
}) => {
  const qrRef = useRef<View>(null);

  const handleShare = () => {
    shareQRCode(qrRef, 'Sharing my QR!');
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
          {/* done model */}
          <HeroButton
            btnText="Done"
            varient="done"
            onPress={() => modalVisibile(false)}
          />

          {/* QR View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* QR */}
            <View style={styles.QRView} ref={qrRef}>
              <GenerateQR data={data} />
            </View>

            {/* Share My QR */}
            <HeroButton
              btnText="Share My QR"
              varient="outlined"
              onPress={handleShare}
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
});

export default ShowMyQRModal;
