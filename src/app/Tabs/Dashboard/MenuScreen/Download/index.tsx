import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
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
      <SafeAreaView>
        {/* Screen Title */}
        <ScreenTopTitle navigation={navigation} screenTitle={'Download'} />

        {/* Screen Body */}
        <SearchInput
          placeHolder={'Download File'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Just for now  */}
        <RemainingWork />
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

export default DownloadScreen;
