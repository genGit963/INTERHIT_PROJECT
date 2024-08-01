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

import {MandirInterface} from '..';
import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';
import BottomSpace from '../../../../../components/BottomSpace';
import MandirLocationSvg from '../../../../../assets/svg/location.svg';

const MandirViewModal = ({
  isVisible,
  onClose,
  data,
}: {
  isVisible: boolean;
  onClose: () => void;
  data: MandirInterface | undefined;
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
          <TouchableOpacity onPress={onClose} style={styles.DoneButton}>
            <ThemedText style={styles.DoneText} type="mediumBold">
              Done
            </ThemedText>
          </TouchableOpacity>

          {/* Content View */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScorllContainer}>
            {/* title */}
            <ThemedText type="mediumBold" style={styles.Title}>
              {data?.title}
            </ThemedText>
            {/* Location */}
            <View style={styles.Location}>
              <MandirLocationSvg height={16} width={16} />
              <ThemedText style={styles.LocationText}>
                {data?.location}
              </ThemedText>
            </View>

            {/* Images Carousel */}
            <Image
              source={{uri: data?.image}}
              alt={data?.title}
              style={styles.TempleImg}
              resizeMode="cover"
            />

            {/* Detail */}
            <ThemedText style={styles.MandirDetail}>
              क्रियाशीलता र रंगिनता भरपुर नेपाली संस्कृति र जीवन उत्सव। हाम्रो
              सामाजिक समृद्धता र सांस्कृतिक विविधतामा गहिरो नाटिकले फैलिएको छ।
              नेपाली लोकसंस्कृति अनेक रंग र स्वादमा समृद्ध छ, जुन सार्वजनिक र
              प्राइभेट अवस्थामा पाईन्छ। यसले हाम्रो समाजलाई अन्याय, समर्थन, र
              सामूहिकता भर्खरै प्रदान गर्दछ। नेपाली साहित्य, कला, संगीत, नृत्य,
              वस्त्र, र भोजनसमेत नेपालको सांस्कृतिक धरोहरको एक महत्त्वपूर्ण
              हिस्सा हुन्। त्यस्तो धेरै विविधताले हाम्रो देशलाई अनूठो र अत्यन्त
              प्रिय बनाएको छ। धार्मिक र सांस्कृतिक अवस्थामा, हाम्रो समाजले धेरै
              प्राचीन परंपराहरू आदर्श रुपमा बनाएको छ। नेपाली साहित्य र भाषा
              प्राय: हाम्रो भाषा, संस्कृतिक धारणा, र रहेका ऐतिहासिक घटनाहरूको
              विस्तृत प्रतिबिम्ब हो। यसले हाम्रो समुदायको संस्कृतिक गहिरोता,
              ज्ञान, र विचारलाई प्रकट गर्दछ। धेरै तालिकाहरू, रितुअनुसार उत्सव,
              उत्सव, तथा पर्वहरू भागी नेपालमा आयोजित हुन्छन्। यी आयोजनहरू नेपाली
              सांस्कृतिक परंपरा र धार्मिक उत्सवमा सहायक छन्। यसले नेपाली जीवनको
              निरन्तरता र समृद्धताको प्रतिष्ठा गर्दछ। प्रथम, नेपाली संस्कृतिको
              विविधता र समृद्धतामा संगीत, नृत्य, र कला जस्ता अनेक आदानप्रदानहरू
              भरिएका छन्। यसले नेपाली समुदायलाई समृद्ध भावना, सांस्कृतिक
              सहभागिता, र सामूहिक अभिवृद्धि साधन गर्दछ।
            </ThemedText>
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
    marginVertical: 5,
  },
  TempleImg: {
    height: 200,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  MandirDetail: {
    marginVertical: 8,
    textAlign: 'left',
    lineHeight: 22,
  },
  Location: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
    // borderWidth: 1,
  },
  LocationText: {
    textAlign: 'right',
    //   backgroundColor: 'red',
  },
});

export default MandirViewModal;
