import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {ThemedText} from '../../../../../components/ThemedText';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../../components/BottomSpace';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import LiteratureViewModal from './components/LiteratureViewModal';
import LiteratureCard from './components/LiteratureCard';
import AddLiteratureSvg from '../../../../../assets/svg/solid-plus-circle.svg';
import LiteratureAddModal from './components/LiteratureAddModal';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import {useGetLiterature} from '../../../../../hooks/tabs/dashboard/literature';
import {LiteratureResInterface} from '../../../../../schema/tabs/dashboard/literature.schema';
import ApiError from '../../../../../components/api/ApiError';
import Loader from '../../../../../components/Loader';
import SearchInput, {SearchType} from '../../../../../components/SearchInput';

// types and interface
type LiteratureScreenProps = {} & AppScreenNavigationType;

// ----------------- Literature Screen ---------------------
const LiteratureScreen: React.FC<LiteratureScreenProps> = ({navigation}) => {
  // View Modal States
  const [selectedLiterature, setSelectedLiterature] = useState<
    LiteratureResInterface | undefined
  >(undefined);

  const [literatureData, setLiteratureData] = useState<
    LiteratureResInterface[]
  >([]);

  const [isLiteratureViewVisible, setLiteratureViewVisible] =
    useState<boolean>(false);

  const [searchText, setSearchText] = useState<SearchType['searchText']>('');

  const handleLiteratureView = (Literature: LiteratureResInterface) => {
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

  const {loading, error, handleGetLiterature} = useGetLiterature();
  const getLiteratureData = async () => {
    await handleGetLiterature().then((Response) => {
      setLiteratureData(Response);
    });
  };

  const searchedLiterature: LiteratureResInterface[] = useMemo(
    () =>
      literatureData.filter(
        (item) =>
          item?.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item?.author.toLowerCase().includes(searchText.toLowerCase()),
      ) || [],
    [searchText],
  );

  useEffect(() => {
    getLiteratureData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <SafeAreaView>
        <ThemedText>{error}</ThemedText>
        <ApiError message={error} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Literature" />

        {/* Search and filter */}
        <SearchInput
          placeHolder={'Literature'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Literature Card Contents */}

        <FlatList
          initialNumToRender={5}
          data={
            searchText
              ? searchedLiterature
              : literatureData
              ? literatureData
              : []
          }
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <LiteratureCard
              callbackHandlePress={handleLiteratureView}
              literature={item.item}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Literatures" />}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Dark Overlay */}
        {(isLiteratureViewVisible || isLiteratureAddVisible) && (
          <View style={styles.Overlay} />
        )}

        {/* Literature Detail View Modal */}
        {isLiteratureViewVisible && (
          <LiteratureViewModal
            isVisible={isLiteratureViewVisible}
            modalVisibile={handleCloseLiteratureView}
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
            modalVisibile={setLiteratureAddVisible}
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
  Overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
  },
});

export default LiteratureScreen;
