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
import {useGenQuery} from '../../../../../hooks/gen-hooks/gen-query';
import DASHBOARD_SERVICES from '../../../../../services/tabs/dashboard';
import ApiError from '../../../../../components/api/ApiError';
import Loader from '../../../../../components/Loader';
import useTranslate from '../../../../../hooks/language/translate';

// types and interface
type AlekhScreenProps = {} & AppScreenNavigationType;
export interface AlekhInterface {
  image: {
    secure_url: string;
    public_id: string;
  };
  createdBy: {
    id: number;
    name: string;
    phone: string;
  };
  _id: string;
  title: string;
  desc: string;
  author: string;
  body: string;
}

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

  // Search text
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');

  const {translateLanguage} = useTranslate();

  // Get Alekhs hook
  const {data, loading, error} = useGenQuery({
    queryFn: async () => await DASHBOARD_SERVICES.getAlekhs(),
    cacheTime: 6, // 6 minute cache
  });

  // Filtered data based on search text
  const searchedData: AlekhInterface[] = data?.filter(
    (item: AlekhInterface) =>
      item.body.toLowerCase().includes(searchText.toLowerCase()) ||
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <SafeAreaView>
        <ApiError message={error as string} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Alekh', 'आलेख')}
        />

        {/* Search and filter */}
        <SearchInput
          placeHolder={translateLanguage('Alekh', 'आलेख')}
          callBackSetSearchValue={setSearchText}
        />

        {/* Alekh Card Contents */}
        <FlatList
          initialNumToRender={5}
          data={searchText ? searchedData : data || []}
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <AlekhCard callbackHandlePress={handleAlekhView} alekh={item} />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Alekhs" />}
          keyExtractor={(item) => item._id}
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

export default AlekhScreen;
