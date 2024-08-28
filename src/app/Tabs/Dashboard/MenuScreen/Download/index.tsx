import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import SearchInput, {SearchType} from '../../../../../components/SearchInput';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {ThemedText} from '../../../../../components/ThemedText';
import RemainingWork from '../../../../../components/$remaingWork';

// types
type DownloadScreenProps = {} & AppScreenNavigationType;

const DownloadScreen: React.FC<DownloadScreenProps> = ({navigation}) => {
  // Search
  const [searchText, setSearchText] = useState<SearchType['searchText'] | null>(
    null,
  );
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Screen Title */}
        <ScreenTopTitle navigation={navigation} screenTitle={'Download'} />

        <SearchInput
          placeHolder={'Download File'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Just for now  */}
          <RemainingWork />
        </ScrollView>
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
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
  ScrollView: {marginBottom: 10, paddingBottom: 40},
  ScrollContent: {paddingBottom: 140},
});

export default DownloadScreen;
