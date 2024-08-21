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
            {alekh.desc}
          </ThemedText>
        </View>
        <Image
          source={{
            uri: alekh.image.secure_url,
          }}
          alt="blog_image"
          style={styles.AlekhImg}
        />
      </View>
      <View style={styles.WriterDate}>
        <ThemedText style={styles.WriterName}>{alekh.author}</ThemedText>
        <ThemedText style={styles.CreatedBy}>{alekh.createdBy.name}</ThemedText>
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
    height: 90,
    width: 140,
    borderRadius: 10,
    // borderWidth: 1,
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
  CreatedBy: {
    // backgroundColor: 'green',
    textAlign: 'right',
  },
});

export default AlekhCard;
