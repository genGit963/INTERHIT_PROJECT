import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../../../constants/Color';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import DropdownYogdan from './components/DropdownYogdan';
import {BanshaYogdanInterface} from '../../../../../schema/tabs/dashboard/bansha-yogdan.schema';
import supplyShadowEffect from '../../../../../utils/Shadow';
import YogdanCard from './components/YogdanCard';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import BottomSpace from '../../../../../components/BottomSpace';
import AddYogdanSvg from '../../../../../assets/svg/solid-plus-circle.svg';
import AddYogdanModal from './components/AddYogdanForm';
import SearchInput, {SearchType} from '../../../../../components/SearchInput';
import {useGetYogdan} from '../../../../../hooks/tabs/dashboard/yogdan';
import Loader from '../../../../../components/Loader';
import ApiError from '../../../../../components/api/ApiError';

// types
type BanshaContributionProps = {} & AppScreenNavigationType;

const BanshaContribution: React.FC<BanshaContributionProps> = ({
  navigation,
}) => {
  // search Text
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('searchText bansha yogdan: ', searchText);

  //yogdan data
  const [yogdanData, setYogdanData] = useState<BanshaYogdanInterface[]>([]);

  // DD selected value
  const [DDSelectedValue, setDDSelectedValue] = useState<string>('All');

  // contribution QR modal
  const [isYogdanAddVisible, setYogdanAddVisible] = useState<boolean>(false);

  //get yogdans
  const {loading, error, handleGetYogdan} = useGetYogdan();

  useEffect(() => {
    const getYogdanData = async () => {
      await handleGetYogdan().then((Resp) => {
        // console.log('Yogdan data; ', Resp);
        setYogdanData(Resp);
      });
    };

    getYogdanData();
  }, [handleGetYogdan]);

  // filteration by DD selected value
  const filterData: BanshaYogdanInterface[] =
    DDSelectedValue === 'All'
      ? yogdanData
      : yogdanData.filter(
          (item, _) =>
            item.type.toLowerCase() === DDSelectedValue.toLowerCase(),
        );
  const searchedData: BanshaYogdanInterface[] = yogdanData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Loading
  if (loading) {
    return <Loader />;
  }

  // error
  if (error) {
    return (
      <SafeAreaView>
        <ApiError message={error} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.Page}>
      <SafeAreaView>
        {/* Screen Title */}
        <ScreenTopTitle navigation={navigation} screenTitle={'Bansha Yogdan'} />

        {/* Screen Body */}
        <SearchInput
          placeHolder={'Bansaj Yogdan'}
          callBackSetSearchValue={setSearchText}
        />

        {/* dropdown */}
        <DropdownYogdan callBackSetDDSelected={setDDSelectedValue} />

        {/* Flatlist of yodan content */}
        <FlatList
          initialNumToRender={5}
          data={searchText ? searchedData : filterData}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContents}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <YogdanCard yogdan={item.item} />}
          ListEmptyComponent={<EmptyFlatList message="No Yogdans" />}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>

      {/* Yogdan Add Button Opener */}
      <TouchableOpacity
        style={styles.AddYoganBtn}
        onPress={() => setYogdanAddVisible(true)}>
        <AddYogdanSvg style={styles.AddYogdanIcon} />
      </TouchableOpacity>

      {/* Contribution ADD QR modal */}
      {isYogdanAddVisible && (
        <AddYogdanModal
          isVisible={isYogdanAddVisible}
          modalVisibile={setYogdanAddVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  FlatListContainer: {marginVertical: 10},
  FlatlistContents: {marginBottom: '8%'},
  FlatlistFooter: {marginBottom: '6%'},
  AddYoganBtn: {
    position: 'absolute',
    bottom: '4%',
    right: '1.5%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddYogdanIcon: {
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 6,
      Color: 'black',
      Opacity: 0.6,
      Elevation: 5,
    }),
  },
});

export default BanshaContribution;
