import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../../../../../components/ThemedText';
import { Colors } from '../../../../../../constants/Color';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import { BanshaYogdanInterface } from '../../../../../../schema/tabs/dashboard/bansha-yogdan.schema';

type YogdanCardPropsTypes = {
  yogdan: BanshaYogdanInterface;
};

const YogdanCard: React.FC<YogdanCardPropsTypes> = ({ yogdan }) => {
  return (
    <View style={styles.YogdanCard}>
      <View style={styles.YogdanCardBody}>
        <View style={styles.WriteView}>
          <Image
            source={{
              uri: yogdan.image.secure_url,
            }}
            alt="yogandan_image"
            style={styles.YogdanImg}
          />
          <ThemedText type="semiBold" style={styles.TitleName}>
            {yogdan.name}
          </ThemedText>
        </View>
        <ThemedText type="default" style={styles.Detail}>
          {yogdan.description}
        </ThemedText>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  YogdanCard: {
    borderWidth: 0.5,
    padding: 16,
    borderColor: Colors.muteGray,
    marginVertical: 8,
    marginHorizontal: 3,
    backgroundColor: Colors.whiteTunedBG,

    borderRadius: 10,
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 3,
      Color: '#000',
      Opacity: 0.2,
      Elevation: 2,
    }),
  },
  YogdanCardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TitleDetail: {
    flex: 0.6,
    // backgroundColor: 'red',
  },
  TitleName: {
    fontSize: 16,
  },
  Detail: {
    textAlign: 'left',
    marginTop: 8,
    // borderWidth: 1,
  },
  WriteView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    // backgroundColor: 'green',
  },
  YogdanImg: {
    height: 50,
    width: 50,
    borderRadius: 40,
    // backgroundColor: 'green',
  },
});

export default YogdanCard;
