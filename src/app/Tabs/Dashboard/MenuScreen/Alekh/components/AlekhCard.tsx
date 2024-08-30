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
      <View style={styles.WriterCreator}>
        <ThemedText style={styles.WriterName} type="mediumBold">
          <ThemedText>Author: </ThemedText>
          {alekh.author}
        </ThemedText>
        <ThemedText style={styles.CreatedBy} type="mediumBold">
          <ThemedText>Creator: </ThemedText>
          {alekh.createdBy.name}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  AlekhCard: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
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
  WriterCreator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
    borderTopWidth: 0.5,
    borderTopColor: Colors.muteGray,

    // borderWidth: 1,
  },
  WriterName: {
    // backgroundColor: 'red',
    textAlign: 'right',
    fontSize: 16,
  },
  CreatedBy: {
    // backgroundColor: 'green',
    textAlign: 'right',
    fontSize: 16,
    color: Colors.darkGray,
  },
});

export default AlekhCard;
