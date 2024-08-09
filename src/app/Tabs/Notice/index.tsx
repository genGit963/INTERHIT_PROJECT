import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import SearchInput, {SearchType} from '../../../components/SearchInput';
import {Colors} from '../../../constants/Color';

// types and interface
type NoticeTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Notice Tab Screen ---------------------
const NoticeTabScreen: React.FC<NoticeTabScreenProps> = ({navigation}) => {
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('searchText notice: ', searchText);
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Notice" />

        {/* Search Bar */}
        <SearchInput
          placeHolder={'Notices'}
          callBackSetSearchValue={setSearchText}
        />

        {/*  Screen Body */}

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
});

export default NoticeTabScreen;
