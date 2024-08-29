import React, {useEffect, useState} from 'react';
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
import {SocietyContributionRespInterface} from '../../../schema/tabs/contribution/contributions.schema';
import EmptyFlatList from '../../../components/EmptyFlatList';
import ContributionCard from './components/SContributionCard';
import {Colors} from '../../../constants/Color';
import SearchInput, {SearchType} from '../../../components/SearchInput';
import AddContributionSvg from '../../../assets/svg/organization-contribution.svg';
import supplyShadowEffect from '../../../utils/Shadow';
import SoceityContributionQRModal from './components/SContributionQRModal';
import {useGetAllContributionEvents} from '../../../hooks/tabs/contribution/contribution';
import SContributionViewModal from './components/SContributionViewModal';
import Loader from '../../../components/Loader';
import useTranslate from '../../../hooks/language/translate';
// types and interface
type ContributionTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Contribution Tab Screen ---------------------
const ContributionTabScreen: React.FC<ContributionTabScreenProps> = ({
  navigation,
}) => {
  // search
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('searchText contribution: ', searchText);

  //contributionEventData
  const [societyContributionData, setSocietyContributionData] = useState<
    SocietyContributionRespInterface[]
  >([]);

  //modalVisible
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  //selected contribution_event for detail data
  const [selectedContributionEvent, setSelectedContributionEvent] =
    useState<SocietyContributionRespInterface>();

  // contribution QR modal
  const [isContributionAddQRVisible, setContributionAddQRVisible] =
    useState<boolean>(false);

  const {loading, error, handleGetContributionEvents} =
    useGetAllContributionEvents();

  //get all event data
  const getContributionEventData = async () => {
    const getContributionEventResp = await handleGetContributionEvents();
    if (getContributionEventResp) {
      // console.log("Contribution events: ", getContributionEventResp)
      setSocietyContributionData(getContributionEventResp);
    }
  };

  const {translateLanguage} = useTranslate();

  useEffect(() => {
    getContributionEventData();
  }, []);

  const handleContributionEventView = (
    contributionEvent: SocietyContributionRespInterface,
  ) => {
    setSelectedContributionEvent(contributionEvent);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedContributionEvent(undefined);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Contribution', 'योगदान')}
        />

        {/* Search Title */}
        <SearchInput
          placeHolder={translateLanguage('Contribution', 'योगदान')}
          callBackSetSearchValue={setSearchText}
        />

        {/*  Contribution Contents */}
        <FlatList
          initialNumToRender={5}
          data={societyContributionData}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContents}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <ContributionCard
              contributionData={item.item}
              callbackHandlePress={handleContributionEventView}
            />
          )}
          ListEmptyComponent={
            loading ? <Loader /> : <EmptyFlatList message="No Contributions" />
          }
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {isModalVisible && (
          <SContributionViewModal
            isVisible={isModalVisible}
            modalVisible={handleCloseModal}
            data={selectedContributionEvent}
          />
        )}

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
          modalVisibile={setContributionAddQRVisible}
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
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 50,
  },
  AddContribtionIcon: {
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 6,
      Color: 'black',
      Opacity: 0.8,
      Elevation: 1,
    }),
  },
});

export default ContributionTabScreen;
