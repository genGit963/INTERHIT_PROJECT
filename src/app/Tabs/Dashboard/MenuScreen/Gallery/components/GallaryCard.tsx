import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GalleryAPIInterface} from '../../../../../../schema/tabs/dashboard/gallary.schema';
import NoOfImageSvg from '../../../../../../assets/svg/tiny-img-icon.svg';
import {ThemedText} from '../../../../../../components/ThemedText';

type GallaryCardProps = {
  gallary: GalleryAPIInterface;
  callbackHandlePress: (value: any) => void;
};

const GallaryCard: React.FC<GallaryCardProps> = ({
  gallary,
  callbackHandlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => callbackHandlePress(gallary)}
      style={styles.GallaryCard}>
      <View style={styles.GallaryCardBody}>
        <Image
          source={{
            uri: gallary?.images[0].secure_url,
          }}
          alt={gallary?.title}
          style={styles.MainImg}
          resizeMode="cover"
        />
        <ThemedText type="mediumBold" style={styles.Title}>
          {gallary?.title}
        </ThemedText>
        <View style={styles.ImageCount}>
          <NoOfImageSvg height={16} width={16} />
          <ThemedText style={styles.CountText} type="default">
            {gallary?.images.length}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GallaryCard;

export const styles = StyleSheet.create({
  GallaryCard: {
    height: 'auto',
    width: '44%',
    margin: 'auto',
  },
  GallaryCardBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 2,
  },
  MainImg: {
    height: 100,
    width: '100%',
    borderRadius: 6,
  },
  Title: {
    fontSize: 16,
  },
  ImageCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  CountText: {
    fontSize: 14,
  },
});
