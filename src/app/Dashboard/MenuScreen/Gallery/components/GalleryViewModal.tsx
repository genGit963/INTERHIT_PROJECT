import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import supplyShadowEffect from '../../../../../utils/Shadow';

import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';
import BottomSpace from '../../../../../components/BottomSpace';
import {GalleryAPIInterface} from '../../../../../schema/dashboard/gallary.schema';

const GallaryViewModal = ({
  isVisible,
  onClose,
  data,
}: {
  isVisible: boolean;
  onClose: () => void;
  data: GalleryAPIInterface | undefined;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* close model */}
          <TouchableOpacity onPress={onClose} style={styles.DoneButton}>
            <ThemedText style={styles.DoneText} type="mediumBold">
              Done
            </ThemedText>
          </TouchableOpacity>

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
