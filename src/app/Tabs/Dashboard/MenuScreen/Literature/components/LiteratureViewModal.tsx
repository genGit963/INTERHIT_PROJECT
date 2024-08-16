import React from 'react';
import { Modal, StyleSheet, View, ScrollView, Image } from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import { ThemedText } from '../../../../../../components/ThemedText';
import { Colors } from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import HeroButton from '../../../../../../components/HeroButton';
import { LiteratureResInterface } from '../../../../../../schema/tabs/dashboard/literature.schema';

const LiteratureViewModal = ({
  isVisible,
  modalVisibile,
  data,
}: {
  isVisible: boolean;
  modalVisibile: () => void;
  data: LiteratureResInterface | undefined;
}) => {
  //   console.log(data);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={modalVisibile}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* done btn */}
          <HeroButton btnText="Done" varient="done" onPress={modalVisibile} />

          {/* Content View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* Images Carousel */}
            <Image
              source={{ uri: data?.author_image.secure_url }}
              alt={data?.author}
              style={styles.WriteImg}
              resizeMode="cover"
            />
            {/* Writer */}
            <ThemedText type='semiBold' style={styles.Writer}>
              {data?.author}
            </ThemedText>
            <ThemedText type='mediumBold' style={styles.Date}>{String(new Date(data?.createdAt as string).toDateString())}</ThemedText>

            {/* Detail */}
            <ThemedText style={styles.Detail}>{data?.content}</ThemedText>
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
    backgroundColor: Colors.background,
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
      Elevation: 8,
    }),
  },
  ScorllContainer: { width: '100%', paddingHorizontal: 10 },
  DoneButton: {
    width: '100%',
    paddingHorizontal: 4,
  },
  DoneText: {
    color: Colors.primary,
    textAlign: 'right',
    fontSize: 18,
  },
  WriteImg: {
    height: 120,
    width: 120,
    marginVertical: 10,
    borderRadius: 70,
    margin: 'auto',
  },
  Writer: {
    fontSize: 20,
    textAlign: 'center',
    padding: 2,
  },
  Date: {
    fontSize: 16,
    textAlign: 'center',
  },
  Detail: {
    marginVertical: 8,
    textAlign: 'left',
  },
});

export default LiteratureViewModal;
