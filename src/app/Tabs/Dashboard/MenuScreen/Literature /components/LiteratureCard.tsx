import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ThemedText} from '../../../../../../components/ThemedText';
import {LiteratureInterface} from '..';
import {Colors} from '../../../../../../constants/Color';
import supplyShadowEffect from '../../../../../../utils/Shadow';

type LiteratureCardPropsTypes = {
  literature: LiteratureInterface;
  callbackHandlePress: (value: LiteratureInterface) => void;
};

const LiteratureCard: React.FC<LiteratureCardPropsTypes> = ({
  literature,
  callbackHandlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => callbackHandlePress(literature)}
      style={styles.LiteratureCard}>
      <View style={styles.LiteratureCardBody}>
        <View style={styles.WriteView}>
          <Image
            source={{
              uri: literature.image,
            }}
            alt="blog_image"
            style={styles.literatureImg}
          />
          <ThemedText type="semiBold" style={styles.TitleName}>
            {literature.writer}
          </ThemedText>
        </View>
        <ThemedText type="default" style={styles.Detail}>
          {literature.intro}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  LiteratureCard: {
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
  LiteratureCardBody: {
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
  literatureImg: {
    height: 50,
    width: 50,
    borderRadius: 40,
    // backgroundColor: 'green',
  },
});

export default LiteratureCard;
