import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import {SoceityContributionDummyData} from '../../../schema/tabs/dashboard/contribution/contributions.schema';
import EmptyFlatList from '../../../components/EmptyFlatList';
import ContributionCard from './components/SContributionCard';
import {Colors} from '../../../constants/Color';
import SearchInput, {SearchType} from '../../../components/SearchInput';
import AddContributionSvg from '../../../assets/svg/solid-plus-circle.svg';
import supplyShadowEffect from '../../../utils/Shadow';
import SoceityContributionQRModal from './components/SContributionQRModal';
// types and interface
type ContributionTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Contribution Tab Screen ---------------------
const ContributionTabScreen: React.FC<ContributionTabScreenProps> = ({
  navigation,
}) => {
  // search
  const [searchText, setSearchText] = useState<SearchType>({searchText: ''});
  console.log('searchText contribution: ', searchText);

  // contribution QR modal
  const [isContributionAddQRVisible, setContributionAddQRVisible] =
    useState<boolean>(false);

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Contribution" />

        {/* Search Title */}
        <SearchInput
          placeHolder={'Contribution'}
          callBackSetSearchValue={setSearchText}
        />

        {/*  Contribution Contents */}
        <FlatList
          initialNumToRender={5}
          data={SoceityContributionDummyData}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContents}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <ContributionCard contributionData={item.item} />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Contributions" />}
          keyExtractor={(item) => item.Id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Alekh Add Button Opener */}
        <TouchableOpacity
          style={styles.AddContribtionBtn}
          onPress={() => setContributionAddQRVisible(true)}>
          <AddContributionSvg style={styles.AddContribtionIcon} />
        </TouchableOpacity>
        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>

      {/* Contribution ADD QR modal */}
      {isContributionAddQRVisible && (
        <SoceityContributionQRModal
          isVisible={isContributionAddQRVisible}
          onClose={setContributionAddQRVisible}
          data={JSON.stringify({
            bankName: 'Nabil Bank',
            accountName: 'Godar Thapa Donation',
            accountNo: '01000011011010',
          })}
        />
      )}
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
  FlatListContainer: {marginVertical: 10},
  FlatlistContents: {marginBottom: '8%'},
  FlatlistFooter: {marginBottom: '6%'},
  AddContribtionBtn: {
    position: 'absolute',
    bottom: '16%',
    right: '1.5%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddContribtionIcon: {
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

export default ContributionTabScreen;
