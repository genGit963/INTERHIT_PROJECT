import React from 'react';
import {StyleSheet, View} from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';

// Types or props
type QRProps = {
  data: string;
};

const GenerateQR: React.FC<QRProps> = ({data}) => {
  return (
    <View style={styles.QRView}>
      <QRCodeStyled
        data={data}
        style={styles.QR}
        padding={16}
        pieceSize={5}
        pieceBorderRadius={0}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  QRView: {
    // borderWidth: 1,
    height: 'auto',
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 'auto',
  },
  QR: {backgroundColor: 'white', height: 100, width: 100},
});

export default GenerateQR;
