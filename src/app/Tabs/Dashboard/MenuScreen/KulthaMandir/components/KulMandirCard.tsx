import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {ThemedText} from '../../../../../../components/ThemedText';

import {Colors} from '../../../../../../constants/Color';
import {MandirInterface} from '..';

import MandirLocationSvg from '../../../../../../assets/svg/location.svg';

type KulMandirPropsTypes = {
  mandir: MandirInterface;
  callbackHandlePress: (value: MandirInterface) => void;
};

const KulMandirCard: React.FC<KulMandirPropsTypes> = ({
  mandir,
  callbackHandlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => callbackHandlePress(mandir)}
      style={styles.KulMandir}>
      <View style={styles.KulMandirBody}>
        <Image
          source={{
            uri: mandir.image,
          }}
          alt="blog_image"
          style={styles.MandirImg}
        />
        <View style={styles.TitleDetail}>
          <ThemedText type="mediumBold" style={styles.Title}>
            {mandir.title}
          </ThemedText>
          <ThemedText type="default" style={styles.Detail}>
            {mandir.intro}
          </ThemedText>
        </View>
      </View>
      <View style={styles.Location}>
        <MandirLocationSvg height={16} width={16} />
        <ThemedText style={styles.LocationText}>{mandir.location}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  KulMandir: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.muteGray,
    marginVertical: 16,
  },
  KulMandirBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TitleDetail: {
    flex: 0.6,
    // backgroundColor: 'red',
  },
  Title: {
    fontSize: 18,
    paddingVertical: 4,
  },
  Detail: {
    textAlign: 'left',
  },
  MandirImg: {
    flex: 0.35,
    height: '95%',
    width: 120,
    borderRadius: 10,
    // backgroundColor: 'green',
  },
  Location: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
    // borderWidth: 1,
  },
  LocationText: {
    // backgroundColor: 'red',
    textAlign: 'right',
  },
});

export default KulMandirCard;
