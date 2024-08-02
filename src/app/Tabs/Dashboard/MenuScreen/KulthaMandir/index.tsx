import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';

import {ThemedText} from '../../../../../components/ThemedText';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import SearchSvg from '../../../../../assets/svg/search.svg';
import MandirViewModal from './components/KulMandirViewModal';
import KulMandirCard from './components/KulMandirCard';
import BottomSpace from '../../../../../components/BottomSpace';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';

// types and interface
type MandirScreenProps = {} & AppScreenNavigationType;
export interface MandirInterface {
  id: string;
  title: string;
  intro: string;
  image: string;
  location: string;
}

// dummy data
const DummyData: MandirInterface[] = [
  {
    id: 'kdakjfdjajfd',
    title: 'Kul Than Mandri Name',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    location: 'Kadaghari, kathmandu',
  },
  {
    id: 'kdakjfdkaajfd',
    title: 'Kul Than Mandri Name',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    location: 'Kadaghari, kathmandu',
  },
  {
    id: 'kdakjfdjajadaf',
    title: 'Kul Than Mandri Name',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    location: 'Kadaghari, kathmandu',
  },
  {
    id: 'kdakjfdadlkajfd',
    title: 'Kul Than Mandri Name',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    location: 'Kadaghari, kathmandu',
  },
  {
    id: 'kdakjdkaddjajfd',
    title: 'Kul Than Mandri Name',
    intro:
      'मान्छेले आफ्ना मातापितासरह कसैलाई माया गर्छ भने त्यो हो-जन्मभूमि । यसअनुसार म आफ्नो जन्मभूमिलाई मातृभूमि',
    image:
      'https://english.khabarhub.com/wp-content/uploads/2023/02/Changu_Narayan_Travoal.webp',
    location: 'Kadaghari, kathmandu',
  },
];
// const DummyData: MandirInterface[] = [];

// ----------------- Mandir Screen ---------------------
const MandirScreen: React.FC<MandirScreenProps> = ({navigation}) => {
  // View Modal States
  const [selectedMandir, setSelectedMandir] = useState<
    MandirInterface | undefined
  >(undefined);
  const [isMandirViewVisible, setMandirViewVisible] = useState<boolean>(false);
  const handleMandirView = (Mandir: MandirInterface) => {
    setSelectedMandir(Mandir);
    setMandirViewVisible(true);
  };
  const handleCloseMandirView = () => {
    setSelectedMandir(undefined);
    setMandirViewVisible(false);
  };

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Kul Mandir" />

        {/* Search and filter */}
        <View style={styles.SearchConatiner}>
          <ThemedText style={styles.SearchText}>Search Mandir</ThemedText>
          <SearchSvg />
        </View>

        {/* Mandir Card Contents */}
        <FlatList
          initialNumToRender={5}
          data={DummyData}
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <KulMandirCard
              callbackHandlePress={handleMandirView}
              mandir={item.item}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Mandirs" />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Mandir Detail View Modal */}
        {isMandirViewVisible && (
          <MandirViewModal
            isVisible={isMandirViewVisible}
            onClose={handleCloseMandirView}
            data={selectedMandir}
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
  AddMandirButton: {
    position: 'absolute',
    bottom: '20%',
    right: '2%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddMandirIcon: {
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

export default MandirScreen;
