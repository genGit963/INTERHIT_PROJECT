import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {Colors} from '../../../../constants/Color';
import SearchInput, {SearchType} from '../../../../components/SearchInput';
import {ThemedText} from '../../../../components/ThemedText';
import {dummyMergReqData} from '../../../../schema/drawer/profile/mergeRequest.schema';
import EmptyFlatList from '../../../../components/EmptyFlatList';
import MergeReqCard from './components/MergeReqCard';

// types and interface
type MergeRequestScreenProps = {} & AppScreenNavigationType;

// ----------------- Subscription Screen ---------------------
const MergeRequestScreen: React.FC<MergeRequestScreenProps> = ({
  navigation,
}) => {
  const [searchText, setSearchText] = useState<SearchType>({searchText: ''});
  console.log('Merge Request search: ', searchText);
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Merge Request" />

        {/* Search input */}
        <SearchInput
          placeHolder="Merge Request"
          callBackSetSearchValue={setSearchText}
        />

        {/* Dropdown */}
        {/* <MergeReqDD /> */}
        <ThemedText> Select Merge Request </ThemedText>

        {/*  MergeRequest Flatlist */}
        <FlatList
          initialNumToRender={5}
          data={dummyMergReqData}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContent}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <MergeReqCard MergeReqData={item.item} />}
          ListEmptyComponent={<EmptyFlatList message="No Merge Requests" />}
          keyExtractor={(item) => item.Id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

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
});

export default MergeRequestScreen;
