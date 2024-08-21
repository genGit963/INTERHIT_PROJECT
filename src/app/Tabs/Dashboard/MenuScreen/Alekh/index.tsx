import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import AlekhViewModal from './components/AlekhViewModal';
import AlekhCard from './components/AlekhCard';
import BottomSpace from '../../../../../components/BottomSpace';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import { Colors } from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';
import AlekhAddModal from './components/AlekhAddModel';
import { AppScreenNavigationType } from '../../../../../core/navigation-type';
import AddAlekhSvg from '../../../../../assets/svg/solid-plus-circle.svg';
import SearchInput, { SearchType } from '../../../../../components/SearchInput';
import { useGenQuery } from '../../../../../hooks/gen-hooks/gen-query';
import DASHBOARD_SERVICES from '../../../../../services/tabs/dashboard';
import { ThemedText } from '../../../../../components/ThemedText';
import ApiError from '../../../../../components/api/ApiError';
import Loader from '../../../../../components/Loader';

// types and interface
type AlekhScreenProps = {} & AppScreenNavigationType;
export interface AlekhInterface {
  image: {
    secure_url: string;
    public_id: string;
  };
  createdBy: {
    id: number;
    name: string;
    phone: string;
  };
  _id: string;
  title: string;
  desc: string;
  author: string;
  body: string;
}

// dummy data
// const DummyData: AlekhInterface[] = [
//   {
//     image: {
//       secure_url:
//         'https://res.cloudinary.com/dbuffexsp/image/upload/v1723787177/qhc1mryzmatwpfjw89rn.png',
//       public_id: 'qhc1mryzmatwpfjw89rn',
//     },
//     createdBy: {
//       id: 1,
//       name: 'John Doe',
//       phone: '1234567890',
//     },
//     _id: '66bee7a911fdd4cef80e577e',
//     title: 'Alekh_title_1',
//     desc: 'The short description of the alekh',
//     author: 'User_1',
//     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     image: {
//       secure_url:
//         'https://res.cloudinary.com/dbuffexsp/image/upload/v1723803378/nzemgsdllgdpuz94w42e.png',
//       public_id: 'nzemgsdllgdpuz94w42e',
//     },
//     createdBy: {
//       id: 21,
//       name: 'Admin',
//       phone: '1111111111',
//     },
//     _id: '66bf26f211fdd4cef80e5791',
//     title: 'Title',
//     desc: 'The short description of the alekh2',
//     author: 'Govinda',
//     body: "Another new body for the alekh.....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     image: {
//       secure_url:
//         'https://res.cloudinary.com/dbuffexsp/image/upload/v1723958162/axusu1vzagvpisajctpg.png',
//       public_id: 'axusu1vzagvpisajctpg',
//     },
//     createdBy: {
//       id: 1,
//       name: 'John Doe',
//       phone: '1234567890',
//     },
//     _id: '66c18393d09ee19e3deced80',
//     title: 'Title',
//     desc: 'Description',
//     author: 'Govinda',
//     body: 'Alekh body',
//   },
//   {
//     image: {
//       secure_url:
//         'https://res.cloudinary.com/dbuffexsp/image/upload/v1723958319/mtahjolxbykqg6dh5b7g.png',
//       public_id: 'mtahjolxbykqg6dh5b7g',
//     },
//     createdBy: {
//       id: 1,
//       name: 'John Doe',
//       phone: '1234567890',
//     },
//     _id: '66c18430d09ee19e3deced82',
//     title: 'Title',
//     desc: 'Description',
//     author: 'Govinda',
//     body: 'यो चै आलेख को बिस्तृत बिवरन हो ।',
//   },
//   {
//     image: {
//       secure_url:
//         'https://res.cloudinary.com/dbuffexsp/image/upload/v1724138085/dcp324zvnxeyz11oy4qb.jpg',
//       public_id: 'dcp324zvnxeyz11oy4qb',
//     },
//     createdBy: {
//       id: 1,
//       name: 'John Doe',
//       phone: '1234567890',
//     },
//     _id: '66c44265621b0382f94e6bca',
//     title: 'Rrrfffgggjjj',
//     desc: 'Dddfff',
//     author: 'Trtt',
//     body: 'post alekh: AxiosError: Request failed with status code 401 and I will be there in about an hour or so to get it to you in the ',
//   },
// ];

// ----------------- Alekh Screen ---------------------
const AlekhScreen: React.FC<AlekhScreenProps> = ({ navigation }) => {
  // View Modal States
  const [selectedAlekh, setSelectedAlekh] = useState<
    AlekhInterface | undefined
  >(undefined);
  const [isAlekhViewVisible, setAlekhViewVisible] = useState<boolean>(false);
  const handleAlekhView = (alekh: AlekhInterface) => {
    setSelectedAlekh(alekh);
    setAlekhViewVisible(true);
  };
  const handleCloseAlekhView = () => {
    setSelectedAlekh(undefined);
    setAlekhViewVisible(false);
  };

  // Add Modal States
  const [isAlekhAddVisible, setAlekhAddVisible] = useState<boolean>(false);
  //search text
  const [searchText, setSearchText] = useState<SearchType['searchText']>('');
  console.log('searchText alekh: ', searchText);

  //getAlekhs hooks
  // const getAlekhData = async () => await DASHBOARD_SERVICES.getAlekhs();
  const { data, loading, error } = useGenQuery({
    queryFn: async () => await DASHBOARD_SERVICES.getAlekhs(),
    cacheTime: 6, // 6 minute cache
  });

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <SafeAreaView>
        <ApiError message={error as string} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle="Alekh" />

        {/* Search and filter */}
        {/* <View style={styles.SearchConatiner}>
          <ThemedText style={styles.SearchText}>Search Alekh</ThemedText>
          <SearchSvg />
        </View> */}

        <SearchInput
          placeHolder={'Aalekh'}
          callBackSetSearchValue={setSearchText}
        />

        {/* Alekh Card Contents */}
        <FlatList
          initialNumToRender={5}
          data={data ? data : []}
          contentContainerStyle={styles.Flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <AlekhCard
              callbackHandlePress={handleAlekhView}
              alekh={item.item}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Alekhs" />}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Alekh Detail View Modal */}
        {isAlekhViewVisible && (
          <AlekhViewModal
            isVisible={isAlekhViewVisible}
            modalVisibile={handleCloseAlekhView}
            data={selectedAlekh}
          />
        )}

        {/* Alekh Add Button Opener */}
        <TouchableOpacity
          style={styles.AddAlekhButton}
          onPress={() => setAlekhAddVisible(true)}>
          <AddAlekhSvg style={styles.AddAlekhIcon} />
        </TouchableOpacity>

        {/* Add Alekh modal */}
        {/* Alekh Detail View Modal */}
        {isAlekhAddVisible && (
          <AlekhAddModal
            isVisible={isAlekhAddVisible}
            modalVisibile={setAlekhAddVisible}
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
  SearchConatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  SearchText: {
    color: Colors.muteText,
    fontSize: 18,
  },
  Flatlist: { marginBottom: '8%' },
  FlatlistFooter: { marginBottom: '6%' },
  AddAlekhButton: {
    position: 'absolute',
    bottom: '16%',
    right: '1.5%',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0)',
  },
  AddAlekhIcon: {
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 7,
      Color: 'black',
      Opacity: 0.6,
      Elevation: 5,
    }),
  },
});

export default AlekhScreen;
