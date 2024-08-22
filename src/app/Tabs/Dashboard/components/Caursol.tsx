import {
  StyleSheet,
  ImageBackground,
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from '../../../../constants/Color';

const { width } = Dimensions.get('screen');
interface CarouselInterface {
  id: string;
  title: string;
  uri: string;
}

type RenderItemProps = {
  item: CarouselInterface;
};

const RenderItem: React.FC<RenderItemProps> = ({ item }) => {
  return (
    <View style={styles.imageContainer} key={item.id}>
      <ImageBackground
        source={{ uri: item.uri }}
        imageStyle={styles.BackImage}
        style={styles.ImageBackground}>
        <View style={styles.TextView}>
          <ThemedText type="semiBold" style={styles.Title}>
            {item.title}
          </ThemedText>
          <ThemedText type="default" style={styles.Des}>
            Organized By: गोदार थापा सेवा समाज दमक
          </ThemedText>
        </View>
      </ImageBackground>
    </View>
  );
};

const Caursol: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const X_offset = event.nativeEvent.contentOffset.x;
    const carouselWidth = width - 48;
    const active_index = Math.round(X_offset / carouselWidth);
    setActiveIndex(active_index);
  };

  return (
    <View style={styles.carouselContainer}>
      <View>
        <FlatList
          // style={styles.Flatlist}
          // contentContainerStyle={styles.FlatListContent}
          data={image}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item, index) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        />
      </View>

      {/* indicator */}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          marginTop: 4,
        }}>
        {image.map((_, index) => {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor:
                  activeIndex == index ? Colors.primary : Colors.muteGray,
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

export default Caursol;

const styles = StyleSheet.create({
  carouselContainer: {
    width: width - 48, //subtracting the padding of the original container
    justifyContent: 'center',
    marginBottom: 20,
  },
  // Flatlist: {
  //   padding: 4,
  // },
  // FlatListContent: {
  //   gap: 10,
  //   borderWidth: 1
  // },
  imageContainer: {
    flex: 1,
    width: width - 48, //image container lai pani manually width deko so that the image could fit within it
    justifyContent: 'center',
    height: 200,
    padding: 4,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  TextView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 8,
    backgroundColor: 'rgba(28,26,26,0.55)',
    borderRadius: 10,
  },
  Title: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 18,
  },
  Des: { fontSize: 16, color: '#fffffa' },
});

let image: CarouselInterface[] = [
  {
    id: '1',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
    title: 'Vawan Nirman',
  },
  {
    id: '2',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
    title: 'Vawan Nirman',
  },
  {
    id: '3',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
    title: 'Vawan Nirman',
  },
  {
    id: '4',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
    title: 'Vawan Nirman',
  },
  {
    id: '5',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
    title: 'Vawan Nirman',
  },
];
