import React from 'react';
import {Modal, StyleSheet, View, ScrollView, Image} from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';

import {AlekhInterface} from '..';
import {ThemedText} from '../../../../../../components/ThemedText';
import {Colors} from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import HeroButton from '../../../../../../components/HeroButton';

const AlekhViewModal = ({
  isVisible,
  modalVisibile,
  data,
}: {
  isVisible: boolean;
  modalVisibile: () => void;
  data: AlekhInterface | undefined;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={modalVisibile}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* Done Btn */}
          <HeroButton btnText="Done" varient="done" onPress={modalVisibile} />

          {/* Content View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* title */}
            <ThemedText type="mediumBold" style={styles.Title}>
              {data?.title}
            </ThemedText>
            {/* Location */}
            <View style={styles.WriterDate}>
              <ThemedText style={styles.WriterName}>{data?.author}</ThemedText>
              <ThemedText style={styles.Creator}>
                {data?.createdBy.name}
              </ThemedText>
            </View>

            {/* Images Carousel */}
            <Image
              source={{uri: data?.image.secure_url}}
              alt={data?.title}
              style={styles.TempleImg}
              resizeMode="cover"
            />

            {/* Detail */}
            <ThemedText style={styles.AlekhDetail}>{data?.body}</ThemedText>
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

    borderWidth: 3,
    borderColor: Colors.muteGray,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: -4,
      Radius: 15,
      Color: '#000',
      Opacity: 0.4,
      Elevation: 8,
    }),
  },
  ScorllContainer: {width: '100%', paddingHorizontal: 10},
  DoneButton: {
    width: '100%',
    paddingHorizontal: 4,
  },
  DoneText: {
    color: Colors.primary,
    textAlign: 'right',
    fontSize: 18,
  },
  Title: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 8,
    paddingVertical: 5,
  },
  TempleImg: {
    height: 200,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  AlekhDetail: {
    marginVertical: 8,
    textAlign: 'left',
    lineHeight: 22,
  },
  WriterDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
    // borderWidth: 1,
  },
  WriterName: {
    // backgroundColor: 'red',
    textAlign: 'right',
  },
  Creator: {
    // backgroundColor: 'green',
    textAlign: 'right',
  },
});

export default AlekhViewModal;
