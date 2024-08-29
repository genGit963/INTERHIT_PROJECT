import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../../../../../constants/Color';
import ScreenTopTitle from '../../../../../components/ScreenTopTitle';
import {AppScreenNavigationType} from '../../../../../core/navigation-type';
import {GalleryAPIInterface} from '../../../../../schema/tabs/dashboard/gallary.schema';
import EmptyFlatList from '../../../../../components/EmptyFlatList';
import BottomSpace from '../../../../../components/BottomSpace';
import GallaryCard from './components/GallaryCard';
import GallaryViewModal from './components/GalleryViewModal';
import {useGetAlbum} from '../../../../../hooks/tabs/dashboard/album';
import Loader from '../../../../../components/Loader';
import useTranslate from '../../../../../hooks/language/translate';

// types
type GalleryScreenProps = {} & AppScreenNavigationType;

// interfaces

const Gallery: React.FC<GalleryScreenProps> = ({navigation}) => {
  // View Modal States
  const [selectedGallary, setSelectedGallary] = useState<
    GalleryAPIInterface | undefined
  >(undefined);
  const [isGallaryModalVisible, setGallaryModalVisible] =
    useState<boolean>(false);

  const {translateLanguage} = useTranslate();

  const [albumData, setAlbumData] = useState<GalleryAPIInterface[]>([]);

  const handleGallaryModalView = (gallary: GalleryAPIInterface) => {
    setSelectedGallary(gallary);
    setGallaryModalVisible(true);
  };
  const handleCloseGallaryModal = () => {
    setSelectedGallary(undefined);
    setGallaryModalVisible(false);
  };

  console.log(selectedGallary);

  const {loading, error, handleGetAlbum} = useGetAlbum();
  const getAlbumData = async () => {
    await handleGetAlbum().then((Response) => {
      // console.log("Album response:", Response)
      setAlbumData(Response);
    });
  };

  useEffect(() => {
    getAlbumData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.Page}>
      <SafeAreaView>
        {/* Screen title */}
        <ScreenTopTitle
          screenTitle={translateLanguage('Gallery', 'ग्यालेरी')}
          navigation={navigation}
        />

        {/* album Flatlist */}
        <FlatList
          initialNumToRender={8}
          numColumns={2}
          data={albumData}
          style={styles.FlatListContainer}
          contentContainerStyle={styles.FlatlistContentStyle}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <GallaryCard
              gallary={item.item}
              callbackHandlePress={handleGallaryModalView}
            />
          )}
          ListEmptyComponent={<EmptyFlatList message="No Photos" />}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />

        {/* Gallary Photos View Model */}
        {isGallaryModalVisible && (
          <GallaryViewModal
            isVisible={isGallaryModalVisible}
            data={selectedGallary}
            modalVisibile={handleCloseGallaryModal}
          />
        )}
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
  FlatListContainer: {
    // borderWidth: 1,
    flexDirection: 'column',
  },
  FlatlistContentStyle: {
    marginBottom: '8%',
    gap: 16,
  },
  FlatlistFooter: {marginBottom: '6%'},
});

// dummy data
let dummyData: GalleryAPIInterface[] = [
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666aa712922d585a123b16a4',
    images: [
      {
        public_id: 'albums/w8tlqgbana6fvjamo3nx',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265621/albums/w8tlqgbana6fvjamo3nx.jpg',
        _id: '666aa716922d585a123b16a7',
      },
      {
        public_id: 'albums/oubt5bsr136lbvgrjm8n',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265623/albums/oubt5bsr136lbvgrjm8n.webp',
        _id: '666aa718922d585a123b16ab',
      },
      {
        public_id: 'albums/ya1k3iv0qtrxe0zpj7es',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265626/albums/ya1k3iv0qtrxe0zpj7es.ico',
        _id: '666aa71b922d585a123b16b0',
      },
      {
        public_id: 'albums/oxwyybamhszvmdbz4zln',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265628/albums/oxwyybamhszvmdbz4zln.jpg',
        _id: '666aa71c922d585a123b16b6',
      },
      {
        public_id: 'albums/eo9rsok3taovoqxucnvf',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265630/albums/eo9rsok3taovoqxucnvf.webp',
        _id: '666aa71e922d585a123b16bd',
      },
      {
        public_id: 'albums/v9rilofg7lyve3n25o6o',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265632/albums/v9rilofg7lyve3n25o6o.jpg',
        _id: '666aa720922d585a123b16c5',
      },
      {
        public_id: 'albums/ivnppygnklgrzy5v7zn8',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718265634/albums/ivnppygnklgrzy5v7zn8.jpg',
        _id: '666aa722922d585a123b16ce',
      },
    ],
    title: 'new gallery',
    createdAt: '2024-06-13T08:00:18.023Z',
    updatedAt: '2024-06-13T08:00:34.962Z',
    __v: 7,
  },
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666ad3e585f863185328e9c8',
    images: [
      {
        public_id: 'albums/rn5nz0ktgx4g7ysvswbh',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277095/albums/rn5nz0ktgx4g7ysvswbh.webp',
        _id: '666ad3e785f863185328e9cb',
      },
      {
        public_id: 'albums/ayfv3e0ogbiqirfap8cw',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277096/albums/ayfv3e0ogbiqirfap8cw.ico',
        _id: '666ad3e985f863185328e9cf',
      },
      {
        public_id: 'albums/lmu5hvgw42tvepncz6ya',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277098/albums/lmu5hvgw42tvepncz6ya.jpg',
        _id: '666ad3ea85f863185328e9d4',
      },
      {
        public_id: 'albums/uuiwyrffpq1kpjnsiuzk',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277099/albums/uuiwyrffpq1kpjnsiuzk.webp',
        _id: '666ad3eb85f863185328e9da',
      },
    ],
    title: 'gallery 2',
    createdAt: '2024-06-13T11:11:33.312Z',
    updatedAt: '2024-06-13T11:11:39.995Z',
    __v: 4,
  },
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666ad40085f863185328e9f7',
    images: [
      {
        public_id: 'albums/toifdkynfw72xveqrhsj',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277122/albums/toifdkynfw72xveqrhsj.jpg',
        _id: '666ad40285f863185328e9fa',
      },
      {
        public_id: 'albums/kewnfvlct7qmrr3nl4aq',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277123/albums/kewnfvlct7qmrr3nl4aq.webp',
        _id: '666ad40485f863185328e9fe',
      },
    ],
    title: 'title 3',
    createdAt: '2024-06-13T11:12:00.825Z',
    updatedAt: '2024-06-13T11:12:04.101Z',
    __v: 2,
  },
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666ad49085f863185328eb22',
    images: [
      {
        public_id: 'albums/nz5d5pxg02armyvgxs2j',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277271/albums/nz5d5pxg02armyvgxs2j.jpg',
        _id: '666ad49885f863185328eb46',
      },
    ],
    title: 'fsdadfs',
    createdAt: '2024-06-13T11:14:24.327Z',
    updatedAt: '2024-06-13T11:14:32.284Z',
    __v: 1,
  },
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666ad4b485f863185328eb6b',
    images: [
      {
        public_id: 'albums/yxykrgkvnmdcmgfpb9x7',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277306/albums/yxykrgkvnmdcmgfpb9x7.jpg',
        _id: '666ad4bb85f863185328eb6e',
      },
    ],
    title: 'fda',
    createdAt: '2024-06-13T11:15:00.561Z',
    updatedAt: '2024-06-13T11:15:07.026Z',
    __v: 1,
  },
  {
    createdBy: {
      id: 3,
      name: 'Roshan Paudel',
      phone: '9864175818',
    },
    _id: '666ad4cf85f863185328ebde',
    images: [
      {
        public_id: 'albums/qa20tcheia9pm1la7qsc',
        secure_url:
          'https://res.cloudinary.com/dobmdvyla/image/upload/v1718277330/albums/qa20tcheia9pm1la7qsc.jpg',
        _id: '666ad4d385f863185328ebf2',
      },
    ],
    title: 'lkj',
    createdAt: '2024-06-13T11:15:27.283Z',
    updatedAt: '2024-06-13T11:15:31.659Z',
    __v: 1,
  },
];

export default Gallery;
