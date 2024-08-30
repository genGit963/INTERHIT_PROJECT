import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import SearchInput, {SearchType} from '../../../../components/SearchInput';
import {MergeRequestInterface} from '../../../../schema/drawer/profile/mergeRequest.schema';
import EmptyFlatList from '../../../../components/EmptyFlatList';
import MergeReqCard from './components/MergeReqCard';
import ScreenDropDownSelector from '../../../../components/ScreenDropdownSelector';
import {useHandleGetMergeRequests} from '../../../../hooks/drawer/profile/mergeRequest';
import Loader from '../../../../components/Loader';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type MergeRequestScreenProps = {} & AppScreenNavigationType;

// ----------------- Merge Req Screen ---------------------
const MergeRequestScreen: React.FC<MergeRequestScreenProps> = ({
  navigation,
}) => {
  const {translateLanguage} = useTranslate();

  //to hold the merge requests data from backend
  const [mergeData, setMergeData] = useState<MergeRequestInterface[]>([]);

  const [DDSelectedValue, setDDSelectedValue] = useState<string>(
    'Merge Requests Received',
  );

  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('Merge Request search: ', searchText);

  const {loading, error, handleGetMergeRequests} = useHandleGetMergeRequests();

  //get merge data function
  const getMergeData = async () => {
    const Resp = await handleGetMergeRequests(DDSelectedValue);
    if (Resp) {
      setMergeData(Resp);
      console.log(DDSelectedValue, Resp);
    }
  };

  useEffect(() => {
    getMergeData();
  }, [DDSelectedValue]);

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Merge Request', 'मर्ज अनुरोध')}
        />

        {/* Search input */}
        <SearchInput
          placeHolder="Merge Request"
          callBackSetSearchValue={setSearchText}
        />

        {/* Dropdown */}
        <ScreenDropDownSelector
          options={[
            {label: 'Merge Requests Received', value: 'mergerequests/received'},
            {label: 'Merge Requests Sent', value: 'mergerequests/sent'},
            {label: 'Claim Requests Received', value: 'claimrequests/received'},
            {label: 'Claim Requests Sent', value: 'claimrequests/sent'},
          ]}
          defaultValue="mergerequests/received"
          callBackSetSelectedValue={setDDSelectedValue}
          ddViewWidth={250}
          style={styles.DropDown}
        />

        {/*  MergeRequest Flatlist */}
        {loading ? (
          <Loader style={styles.loadingComponent} />
        ) : (
          <FlatList
            initialNumToRender={5}
            data={mergeData}
            style={styles.FlatListContainer}
            contentContainerStyle={styles.FlatlistContent}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => <MergeReqCard MergeReqData={item.item} />}
            ListEmptyComponent={<EmptyFlatList message="No Merge Requests" />}
            keyExtractor={(item) => item.Id}
            ListFooterComponent={<BottomSpace spaceHeight={100} />}
            ListFooterComponentStyle={styles.FlatlistFooter}
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
  FlatListContainer: {marginVertical: '4%'},
  FlatlistContent: {marginBottom: '8%', gap: 12},
  FlatlistFooter: {marginBottom: '6%'},
  DropDown: {
    marginVertical: 10,
  },
  loadingComponent: {
    marginVertical: 100,
  },
});

export default MergeRequestScreen;
