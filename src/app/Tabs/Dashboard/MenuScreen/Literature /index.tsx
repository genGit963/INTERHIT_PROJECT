import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {ThemedText} from '../../../../../components/ThemedText';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import SearchSvg from '../../../../../assets/svg/search.svg';
import BottomSpace from '../../../../../components/BottomSpace';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import LiteratureViewModal from './components/LiteratureViewModal';
import LiteratureCard from './components/LiteratureCard';
import AddLiteratureSvg from '../../../../../assets/svg/solid-plus-circle.svg';
import LiteratureAddModal from './components/LiteratureAddModal';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';

// types and interface
type LiteratureScreenProps = {} & AppScreenNavigationType;
export interface LiteratureInterface {
  id: string;
  writer: string;
  intro: string;
  image: string;
  date: string;
  khandan: string;
}

// dummy data
const DummyData: LiteratureInterface[] = [
  {
    id: 'kdakjfdjajfd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
  {
    id: 'kdakjfdkaajfd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'poem',
  },
  {
    id: 'kdakjfdjajadaf',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
  {
    id: 'kdakjfdadlkajfd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
  {
    id: 'kdakjdkaddjajfd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
  {
    id: 'kdakjddjajfd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
  {
    id: 'kdakjdkaddjd',
    writer: 'आशिष थापा',
    intro:
      'सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा, छायाँ गर्दछ जाति र परिवारको गाथा, एउटा बुनिएको लुगा, गहिरोमा बसेको।  ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-mn_ku3opZDXIUmMuWv1frZW-kVfC4hn1w&s',
    date: '2020-10-13',
    khandan: 'story',
  },
];
// const DummyData: LiteratureInterface[] = [];

// ----------------- Literature Screen ---------------------
const LiteratureScreen: React.FC<LiteratureScreenProps> = ({navigation}) => {
  // View Modal States
  const [selectedLiterature, setSelectedLiterature] = useState<
    LiteratureInterface | undefined
  >(undefined);
  const [isLiteratureViewVisible, setLiteratureViewVisible] =
    useState<boolean>(false);
  const handleLiteratureView = (Literature: LiteratureInterface) => {
    setSelectedLiterature(Literature);
    setLiteratureViewVisible(true);
  };
  const handleCloseLiteratureView = () => {
    setSelectedLiterature(undefined);
    setLiteratureViewVisible(false);
  };

  // Add Modal States
  const [isLiteratureAddVisible, setLiteratureAddVisible] =
    useState<boolean>(false);

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Literature" />

        {/* Search and filter */}
        <View style={styles.SearchConatiner}>
          <ThemedText style={styles.SearchText}>Search Literature</ThemedText>
          <SearchSvg />
        </View>

        {/* Literature Card Contents */}
        <FlatList
          initialNumToRender={5}
          data={DummyData}
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <LiteratureCard
              callbackHandlePress={handleLiteratureView}
              literature={item.item}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Literatures" />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Literature Detail View Modal */}
        {isLiteratureViewVisible && (
          <LiteratureViewModal
            isVisible={isLiteratureViewVisible}
            onClose={handleCloseLiteratureView}
            data={selectedLiterature}
          />
        )}

        {/* Alekh Add Button Opener */}
        <TouchableOpacity
          style={styles.AddLiteratureButton}
          onPress={() => setLiteratureAddVisible(true)}>
          <AddLiteratureSvg style={styles.AddLiteratureIcon} />
        </TouchableOpacity>

        {/* Add Alekh modal */}
        {/* Alekh Detail View Modal */}
        {isLiteratureAddVisible && (
          <LiteratureAddModal
            isVisible={isLiteratureAddVisible}
            onClose={setLiteratureAddVisible}
          />
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
  SearchConatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.whiteTunedBG,
  },
  SearchText: {
    color: Colors.muteText,
    fontSize: 18,
  },
  Flatlist: {marginBottom: '8%'},
  FlatlistFooter: {marginBottom: '6%'},
  AddLiteratureButton: {
    position: 'absolute',
    bottom: '20%',
    right: '2%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddLiteratureIcon: {
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 10,
      Color: 'black',
      Opacity: 0.6,
      Elevation: 5,
    }),
  },
});

export default LiteratureScreen;
