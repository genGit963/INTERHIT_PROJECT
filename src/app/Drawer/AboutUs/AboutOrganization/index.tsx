import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {ThemedText} from '../../../../components/ThemedText';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';

// types and interface
type AboutOrganizationScreenProps = {} & AppScreenNavigationType;

// ----------------- AboutOrganization screen ---------------------
const AboutOrganizationScreen: React.FC<AboutOrganizationScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle="About Organization"
        />

        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* title */}
          <ThemedText type="title" style={styles.OrgTitle}>
            संस्थाको परिचय
          </ThemedText>

          {/* org image */}
          <Image
            source={{
              uri: 'https://i.ytimg.com/vi/i4Jg-dw1ztY/maxresdefault.jpg',
            }}
            style={styles.OrgImg}
          />

          {/* org detail */}
          <ThemedText style={styles.OrgDetail}>
            क्रियाशीलता र रंगिनता भरपुर नेपाली संस्कृति र जीवन उत्सव। हाम्रो
            सामाजिक समृद्धता र सांस्कृतिक विविधतामा गहिरो नाटिकले फैलिएको छ।
            नेपाली लोकसंस्कृति अनेक रंग र स्वादमा समृद्ध छ, जुन सार्वजनिक र
            प्राइभेट अवस्थामा पाईन्छ। यसले हाम्रो समाजलाई अन्याय, समर्थन, र
            सामूहिकता भर्खरै प्रदान गर्दछ। नेपाली साहित्य, कला, संगीत, नृत्य,
            वस्त्र, र भोजनसमेत नेपालको सांस्कृतिक धरोहरको एक महत्त्वपूर्ण हिस्सा
            हुन्। त्यस्तो धेरै विविधताले हाम्रो देशलाई अनूठो र अत्यन्त प्रिय
            बनाएको छ। धार्मिक र सांस्कृतिक अवस्थामा, हाम्रो समाजले धेरै प्राचीन
            परंपराहरू आदर्श रुपमा बनाएको छ। नेपाली साहित्य र भाषा प्राय: हाम्रो
            भाषा, संस्कृतिक धारणा, र रहेका ऐतिहासिक घटनाहरूको विस्तृत प्रतिबिम्ब
            हो। यसले हाम्रो समुदायको संस्कृतिक गहिरोता, ज्ञान, र विचारलाई प्रकट
            गर्दछ। धेरै तालिकाहरू, रितुअनुसार उत्सव, उत्सव, तथा पर्वहरू भागी
            नेपालमा आयोजित हुन्छन्। यी आयोजनहरू नेपाली सांस्कृतिक परंपरा र
            धार्मिक उत्सवमा सहायक छन्। यसले नेपाली जीवनको निरन्तरता र समृद्धताको
            प्रतिष्ठा गर्दछ। प्रथम, नेपाली संस्कृतिको विविधता र समृद्धतामा
            संगीत, नृत्य, र कला जस्ता अनेक आदानप्रदानहरू भरिएका छन्। यसले नेपाली
            समुदायलाई समृद्ध भावना, सांस्कृतिक सहभागिता, र सामूहिक अभिवृद्धि
            साधन गर्दछ।
          </ThemedText>
        </ScrollView>
        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
  ScrollView: {marginBottom: 10, paddingBottom: 40},
  ScrollContent: {paddingBottom: 140},
  OrgTitle: {
    fontSize: 20,
    paddingVertical: 2,
  },
  OrgImg: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 12,
  },
  OrgDetail: {marginVertical: 20},
});

export default AboutOrganizationScreen;
