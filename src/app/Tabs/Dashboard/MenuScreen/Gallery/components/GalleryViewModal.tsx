import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';

import {ThemedText} from '../../../../../../components/ThemedText';
import {Colors} from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import {GalleryAPIInterface} from '../../../../../../schema/tabs/dashboard/gallary.schema';
import HeroButton from '../../../../../../components/HeroButton';

const GallaryViewModal = ({
  isVisible,
  modalVisibile,
  data,
}: {
  isVisible: boolean;
  modalVisibile: () => void;
  data: GalleryAPIInterface | undefined;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={modalVisibile}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* done model */}
          <HeroButton btnText="Done" varient="done" onPress={modalVisibile} />

          {/* title */}
          <ThemedText type="mediumBold" style={styles.Title}>
            {data?.title}
          </ThemedText>

          {/* Content View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* Location */}

            {/* Images Carousel */}
            <View style={styles.PhotoContainer}>
              {data?.images.map((item, _) => (
                <Image
                  key={item._id}
                  source={{uri: item.secure_url}}
                  alt={data?.title}
                  style={styles.Photo}
                  resizeMode="cover"
                />
              ))}
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
    height: Platform.OS === 'ios' ? '94%' : '99%',
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
    width: '100%',
    paddingHorizontal: 12,

    // backgroundColor: 'red',
  },
  PhotoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 30,
    margin: 'auto',
  },
  Photo: {
    height: 100,
    width: '46%',
    borderRadius: 6,
  },
});

export default GallaryViewModal;
