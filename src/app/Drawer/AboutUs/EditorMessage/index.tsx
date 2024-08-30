import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {ThemedText} from '../../../../components/ThemedText';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import {useGetMessages} from '../../../../hooks/drawer/about/aboutUs';
import EmptyResponse from '../../../../components/EmptyResponse';
import Loader from '../../../../components/Loader';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type EditorMessageScreenProps = {} & AppScreenNavigationType;

// ----------------- EditorMessage screen ---------------------
const EditorMessageScreen: React.FC<EditorMessageScreenProps> = ({
  navigation,
}) => {
  const [editorMessage, setEditorMessage] = useState();
  const {loading, error, handleGetMessage} = useGetMessages();

  const getMessageData = async () => {
    const messageData = await handleGetMessage('editor');
    if (messageData) {
      console.log('message', messageData);
      setEditorMessage(messageData);
    }
  };

  const {translateLanguage} = useTranslate();

  useEffect(() => {
    getMessageData();
  }, []);

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage(
            "Editor's Message",
            'सम्पादकको सन्देश',
          )}
        />

        {/* Body */}
        {editorMessage ? (
          <ScrollView
            style={styles.ScrollView}
            contentContainerStyle={styles.ScrollContent}
            showsVerticalScrollIndicator={false}>
            <View style={styles.PersonView}>
              <Image
                source={{
                  uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBj5mB8g7JqoaTGVSZX_QGQgWRxFvVj0jU45RNPfJh1zYm29pHw3_Os1NHtrmKLD616XARI_VLmVcjzKumkHHR-J_NIa7tqm1Y8wHybSxiaBPP3TDfriMH0V5c3Upwj0yUqCL_VbGCX0Y/w1200-h630-p-k-no-nu/Hamal+Rajesh.jpg',
                }}
                style={styles.PersonImg}
              />
              <View style={styles.PersonDetail}>
                <ThemedText type="title" style={styles.PersonName}>
                  Rajesh Hamal
                </ThemedText>
                <ThemedText type="mediumBold" style={styles.PersonPost}>
                  अध्यक्ष
                </ThemedText>
              </View>
            </View>

            {/* Message detail */}
            {/* org detail */}
            <ThemedText style={styles.MesssageDetail}>
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
        ) : loading ? (
          <Loader />
        ) : (
          <EmptyResponse message="No message from any editor" />
        )}
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
  ScrollView: {marginBottom: 10, paddingBottom: 30},
  ScrollContent: {paddingBottom: 180},
  PersonView: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 16,
  },
  PersonName: {
    fontSize: 18,
  },
  PersonPost: {fontSize: 16},
  PersonImg: {
    height: 160,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  PersonDetail: {
    alignItems: 'flex-start',
  },
  MesssageDetail: {
    marginVertical: 24,
  },
});

export default EditorMessageScreen;
