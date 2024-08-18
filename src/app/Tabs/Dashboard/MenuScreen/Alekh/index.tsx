import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import AlekhViewModal from './components/AlekhViewModal';
import AlekhCard from './components/AlekhCard';
import BottomSpace from '../../../../../components/BottomSpace';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import AlekhAddModal from './components/AlekhAddModel';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import AddAlekhSvg from '../../../../../assets/svg/solid-plus-circle.svg';
import SearchInput, {SearchType} from '../../../../../components/SearchInput';

// types and interface
type AlekhScreenProps = {} & AppScreenNavigationType;
export interface AlekhInterface {
  id: string;
  title: string;
  intro: string;
  image: string;
  writer: string;
  writeDate: string;
}

// dummy data
const DummyData: AlekhInterface[] = [
  {
    id: 'kdakjfdjajfd',
    title: 'भवन निर्माण',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    writer: ' अभिषेक गोदार',
    writeDate: '2024-05-10',
  },
  {
    id: 'kdakjfdkaajfd',
    title: 'भवन निर्माण',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    writer: ' अभिषेक गोदार',
    writeDate: '2024-05-10',
  },
  {
    id: 'kdakjfdjajadaf',
    title: 'भवन निर्माण',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    writer: ' अभिषेक गोदार',
    writeDate: '2024-05-10',
  },
  {
    id: 'kdakjfdadlkajfd',
    title: 'भवन निर्माण',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    writer: ' अभिषेक गोदार',
    writeDate: '2024-05-10',
  },
  {
    id: 'kdakjdkaddjajfd',
    title: 'भवन निर्माण',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    writer: ' अभिषेक गोदार',
    writeDate: '2024-05-10',
  },
];

// ----------------- Alekh Screen ---------------------
const AlekhScreen: React.FC<AlekhScreenProps> = ({navigation}) => {
  // View Modal States
  const [selectedAlekh, setSelectedAlekh] = useState<
    AlekhInterface | undefined
  >(undefined);
  const [isAlekhViewVisible, setAlekhViewVisible] = useState<boolean>(false);
  const handleAlekhView = (alekh: AlekhInterface) => {
    setSelectedAlekh(alekh);
    setAlekhViewVisible(true);
  };
  const handleCloseAlekhView = () => {
    setSelectedAlekh(undefined);
    setAlekhViewVisible(false);
  };

  // Add Modal States
  const [isAlekhAddVisible, setAlekhAddVisible] = useState<boolean>(false);
  //search text
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('searchText alekh: ', searchText);
  //getAlekhs hooks

  // const alekhList: AlekhInterface[] = getAlekhs();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Alekh" />

        {/* Search and filter */}
        {/* <View style={styles.SearchConatiner}>
          <ThemedText style={styles.SearchText}>Search Alekh</ThemedText>
          <SearchSvg />
        </View> */}

        <SearchInput
          placeHolder={'Bansaj Yogdan'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Alekh Card Contents */}
        <FlatList
          initialNumToRender={5}
          data={DummyData}
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <AlekhCard
              callbackHandlePress={handleAlekhView}
              alekh={item.item}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Alekhs" />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Alekh Detail View Modal */}
        {isAlekhViewVisible && (
          <AlekhViewModal
            isVisible={isAlekhViewVisible}
            modalVisibile={handleCloseAlekhView}
            data={selectedAlekh}
          />
        )}

        {/* Alekh Add Button Opener */}
        <TouchableOpacity
          style={styles.AddAlekhButton}
          onPress={() => setAlekhAddVisible(true)}>
          <AddAlekhSvg style={styles.AddAlekhIcon} />
        </TouchableOpacity>

        {/* Add Alekh modal */}
        {/* Alekh Detail View Modal */}
        {isAlekhAddVisible && (
          <AlekhAddModal
            isVisible={isAlekhAddVisible}
            modalVisibile={setAlekhAddVisible}
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
    backgroundColor: '#fff',
  },
  SearchText: {
    color: Colors.muteText,
    fontSize: 18,
  },
  Flatlist: {marginBottom: '8%'},
  FlatlistFooter: {marginBottom: '6%'},
  AddAlekhButton: {
    position: 'absolute',
    bottom: '16%',
    right: '1.5%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddAlekhIcon: {
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 7,
      Color: 'black',
      Opacity: 0.6,
      Elevation: 5,
    }),
  },
});

export default AlekhScreen;
