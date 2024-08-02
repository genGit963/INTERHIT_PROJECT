import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ThemedText} from '../../../../../../components/ThemedText';
import {AlekhInterface} from '..';
import {Colors} from '../../../../../../constants/Color';

type AlekhCardPropsTypes = {
  alekh: AlekhInterface;
  callbackHandlePress: (value: AlekhInterface) => void;
};

const AlekhCard: React.FC<AlekhCardPropsTypes> = ({
  alekh,
  callbackHandlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => callbackHandlePress(alekh)}
      style={styles.AlekhCard}>
      <View style={styles.AlekhCardBody}>
        <View style={styles.TitleDetail}>
          <ThemedText type="mediumBold" style={styles.Title}>
            {alekh.title}
          </ThemedText>
          <ThemedText type="default" style={styles.Detail}>
            {alekh.intro}
          </ThemedText>
        </View>
        <Image
          source={{
            uri: alekh.image,
          }}
          alt="blog_image"
          style={styles.AlekhImg}
        />
      </View>
      <View style={styles.WriterDate}>
        <ThemedText style={styles.WriterName}>{alekh.writer}</ThemedText>
        <ThemedText style={styles.WriteDate}>{alekh.writeDate}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  AlekhCard: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.muteGray,
    marginVertical: 16,
  },
  AlekhCardBody: {
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
  AlekhImg: {
    flex: 0.35,
    height: '95%',
    width: 120,
    borderRadius: 10,
    // backgroundColor: 'green',
  },
  WriterDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
    // borderWidth: 1,
  },
  WriterName: {
    // backgroundColor: 'red',
    textAlign: 'right',
  },
  WriteDate: {
    // backgroundColor: 'green',
    textAlign: 'right',
  },
});

export default AlekhCard;
