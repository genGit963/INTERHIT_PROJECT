import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Colors } from '../../../../../constants/Color';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import { AppScreenNavigationType } from '../../../../../core/navigation-type';
import SearchInput, { SearchType } from '../../../../../components/SearchInput';
import TopContributionCard from './components/TopContributionCard';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import BottomSpace from '../../../../../components/BottomSpace';
import { useGetTopContributions } from '../../../../../hooks/tabs/dashboard/topContribution';
import { TopContributionInterface } from '../../../../../schema/tabs/dashboard/top-contribution.schema';

// types
type TopContributionProps = {} & AppScreenNavigationType;

const TopContribution: React.FC<TopContributionProps> = ({ navigation }) => {
  // search Text;
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');

  const [topContributionData, setTopContributionData] = useState<TopContributionInterface[]>([])

  const { loading, error, handleGetTopContribution } = useGetTopContributions()

  const getTopContributions = async () => {
    await handleGetTopContribution().then((Resp) => {
      setTopContributionData(Resp)
    })
  }

  useEffect(() => {
    getTopContributions()
  }, [])

  return (
    <View style={styles.Page}>
      <SafeAreaView>
        {/* Screen Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={'Top Contribution'}
        />

        {/* Search Bar */}
        <SearchInput
          placeHolder={'Top Contribution'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Flatlist contents */}
        <FlatList
          initialNumToRender={5}
          data={topContributionData.length > 0 ? topContributionData : []}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContents}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <TopContributionCard topContribution={item.item} />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Top Contributions" />}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  FlatListContainer: { marginVertical: 20 },
  FlatlistContents: { marginBottom: '8%', gap: 10 },
  FlatlistFooter: { marginBottom: '6%' },
});

export default TopContribution;
