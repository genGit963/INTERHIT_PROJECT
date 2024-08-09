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
              <ThemedText style={styles.WriterName}>{data?.writer}</ThemedText>
              <ThemedText style={styles.WriteDate}>
                {data?.writeDate}
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
            <ThemedText style={styles.AlekhDetail}>
              मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि ।
              यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि मात्र होइन, आफ्नो गौरव पनि
              मान्छु, किनभने म यस माटोमा जन्मेँ । यस माटोमा हुर्के। मान्छेले
              आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार
              म आफ्नो जन्मभूमिलाई मातृभूमि मात्र होइन, आफ्नो गौरव पनि मान्छु,
              किनभने म यस माटोमा जन्मेँ । यस माटोमा हुकैँ । हुन त कतिपय खराव
              तत्त्वको प्रवेशले गर्दा यस भूमिलाई गाली गर्नेहरू पनि छन्‌ । जहाँ
              आफू जन्मियो, त्यहाँको भएर देशलाई सराप्नेहरू, देश बिगार्नेहरू
              विभिन्न लोलोपोतो देखाएर हिँड्ने गरेका छन्‌ । भ्रप्टताले गाँजेको यस
              समयमा यदि कसैले देशप्रेम र जन्मभूमिप्रतिको कर्तव्य वोल्छ, त्यो कि
              त पागल हुन्छ, कित मूर्ख भन्ने नकारात्मक पक्ष पनि उत्तिकै प्रवल
              रूपमा देखा परेको छ । त्यस सन्दर्भमा आफ्नो क्रा गर्दा मलाई कतै
              ग्लानि हुँदैन । मलाई गौरव लाग्छ । म आफ्नो जन्मभूमिप्रति सचेत र
              इमानदार छु । भन्नेले जे भने पनि हुन्छ, तर म आफ्नो गौरव, आफ्नो
              अभिभावक आफ्नो जन्मभूमिलाई मान्दछु । भनिन्छ नि, जन्मेको क्रण जसले
              माग्छ, त्यो निर्चिनी हो । असलमा देशप्रतिको इमानदार व्यक्ति होइन ।
              पसैले मलाई गर्व छ । म यस देशमा जन्मेँ, जहाँ सगरमाथा छ। लुम्बिनी छ
              । पशुपतिनाथ छ । हरियाली छ । राराताल छ। पुर्खौपुर्खाले आर्जेको पस
              हिमवत्‌ खण्डलाई यदि कोही गाली गर्छ भने त्यो ढाँगी हो । पाखण्डी हो
              । भ्रप्ट हो । खराव हो । मैले आफूले सङ्कल्प गरेको पनि यही हो । हुन
              त कतिपय विद्वानले पनि यही सङ्कल्प गरेका छन्‌-यही देशमा यदि
              पुनर्जन्म भइयो भने हुन पार । यो भावना हो । संवेदना हो । मान्छे
              भावनाले पनि वाँच्छ । मान्छे संवेदनाले पनि बाँच्छ । त्यही भावनामा म
              छु । त्यही संवेदनामा म छु । पही भावना र संवेदनालाई मुटुभित्र राखेर
              सङ्कल्प गरेको छु । म जहाँ जन्मेको छु र जन्मेर हुर्केको छु, त्यो
              मेरी आमाको काख हो । माया हो । ममता हो । म आफ्नी आमाको मायाममतालाई
              बिर्सेर यसको विरूद्ध कहाँ जान सक्छु र ? यसैले मेरो जन्मभूमि मेरो
              गौरव हो । जहाँ म जन्मेँ । जहाँ म हुर्के । जहाँ म आफ्नो जीवन वाँच्न
              सक्षम व्यक्ति भएँ । जहाँ मेरो भावना वसेको छ, त्यो मेरो जन्मभूमि हो
              । त्यो मेरो राष्ट्र हो । संसारको जुनसुकै मुलुकमा पुगूँ, आफ्नी
              मातालाई जसरी विर्सन सकिन्न, त्यसरी आफ्नो जन्मभूमिलाई कसरी विर्सन
              सक्छु र ? अहिले म जुन स्थितिमा छु सन्तोक छ । यो सन्तोकप्राप्ति यदि
              म आफ्नो जन्मभूमिमा नजन्मिएको भए पाउँदै हुँला र ? मेरो जन्मभूमि
              साँच्चै मेरो गौरव हो । मेरो जन्मभूमि जति विकसित हुनुपर्ने हो,
              त्यति हुन सकिरहेको छैन । यसको जति मान बढ्नुपर्ने हो, त्यति वढ्न
              सकिरहेको छैन । यस सत्यलाई नकार्न सकिँदैन, तर ती हुनुमा कसकसले बाधा
              व्यवधान ओछयाएका छन्‌, तिनलाई पत्ता लगाएर परिश्रम गर्ने सन्ततिहरू
              जन्माउन सकोस्‌ भनी आफ्नो जन्मभूमिलाई भनिरहेछु । मेरो जन्मभूमिको
              सानलाई उच्च राख्न स्थानीय सीप नै काफी छन्‌ । तिनलाई सो सद्‌कर्ममा
              अवसर मिल्नेछ भनी म आशावादी छु । म निराश भएको छैनँ । आफ्नो
              प्राणभन्दा बढी माया मेरो देशलाई गर्नुपर्छ भन्ने जानेको छु । ﻿
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
  WriteDate: {
    // backgroundColor: 'green',
    textAlign: 'right',
  },
});

export default AlekhViewModal;
