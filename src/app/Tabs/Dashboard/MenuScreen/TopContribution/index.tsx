import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../../../../../constants/Color';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import SearchInput, {SearchType} from '../../../../../components/SearchInput';
import TopContributionCard from './components/TopContributionCard';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import BottomSpace from '../../../../../components/BottomSpace';
import {useGetTopContributions} from '../../../../../hooks/tabs/dashboard/topContribution';
import {TopContributionInterface} from '../../../../../schema/tabs/dashboard/top-contribution.schema';
import Loader from '../../../../../components/Loader';
import EmptyResponse from '../../../../../components/EmptyResponse';
import useTranslate from '../../../../../hooks/language/translate';
import ApiError from '../../../../../components/api/ApiError';

// types
type TopContributionProps = {} & AppScreenNavigationType;

const TopContribution: React.FC<TopContributionProps> = ({navigation}) => {
  // search Text;
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');

  const [topContributionData, setTopContributionData] = useState<
    TopContributionInterface[]
  >([]);

  const {loading, error, handleGetTopContribution} = useGetTopContributions();

  useEffect(() => {
    const getTopContributions = async () => {
      await handleGetTopContribution().then((Resp) => {
        setTopContributionData(Resp);
      });
    };
    getTopContributions();
  }, []);

  const searchedTopContributors: TopContributionInterface[] = useMemo(
    () =>
      topContributionData.filter((contribution) =>
        contribution.full_name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [searchText],
  );

  const {translateLanguage} = useTranslate();
  return (
    <View style={styles.Page}>
      <SafeAreaView>
        {/* Screen Title */}
        {error ? (
          <ApiError message={'Fetch Failed !!'} />
        ) : (
          <ScreenTopTitle
            navigation={navigation}
            screenTitle={translateLanguage(
              'Top Contributors',
              'शीर्ष योगदानकर्ता',
            )}
          />
        )}

        {/* Search Bar */}
        <SearchInput
          placeHolder={translateLanguage(
            'Top Contributors',
            'शीर्ष योगदानकर्ता',
          )}
          callBackSetSearchValue={setSearchText}
        />

        {/* Flatlist contents */}
        <View>
          {topContributionData.length > 0 ? (
            <FlatList
              initialNumToRender={5}
              data={searchText ? searchedTopContributors : topContributionData}
              style={styles.FlatListContainer}
              contentContainerStyle={styles.FlatlistContents}
              showsVerticalScrollIndicator={false}
              renderItem={(item) => (
                <TopContributionCard topContribution={item.item} />
              )}
              ListEmptyComponent={
                <EmptyFlatList message="No Top Contributions" />
              }
              keyExtractor={(item) => item._id}
              ListFooterComponent={<BottomSpace spaceHeight={100} />}
              ListFooterComponentStyle={styles.FlatlistFooter}
            />
          ) : loading ? (
            <Loader />
          ) : (
            <EmptyResponse message="no top contribution" />
          )}
        </View>
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
  FlatListContainer: {marginVertical: 20},
  FlatlistContents: {marginBottom: '8%', gap: 10},
  FlatlistFooter: {marginBottom: '6%'},
});

export default TopContribution;
