import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import React from 'react';
import {Alert, View} from 'react-native';

export const shareQRCode = async (
  qrRef: React.RefObject<View>,
  message: string,
) => {
  try {
    const uri = await captureRef(qrRef, {
      format: 'png',
      quality: 0.8,
    });

    const options = {
      title: 'Share QR Code',
      message: message,
      url: uri,
      failOnCancel: false,
    };

    // console.log('Sharing qr code', uri);

    await Share.open(options);
  } catch (error) {
    Alert.alert('QR', 'Sharing failed !', [{text: 'Ok', onPress: () => {}}]);
    console.error('Error sharing QR code', error);
  }
};
