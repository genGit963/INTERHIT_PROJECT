import {
  StyleSheet,
  ImageBackground,
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ThemedText} from '../../../../components/ThemedText';
import {Colors} from '../../../../constants/Color';
import {generateUUID} from '../../../../utils/uuid-generator';

const {width} = Dimensions.get('screen');
interface CarouselInterface {
  id: string;
  title: string;
  uri: string;
}

type RenderItemProps = {
  item: CarouselInterface;
};

const RenderItem: React.FC<RenderItemProps> = ({item}) => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{uri: item.uri}}
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
  const [index, setIndex] = useState<number>(0);

  const flatListRef = useRef<FlatList<any | null>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const X_offset = event.nativeEvent.contentOffset.x;
    const carouselWidth = width - 48;
    const active_index = Math.round(X_offset / carouselWidth);
    setActiveIndex(active_index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (index + 1) % image.length;
        setIndex(nextIndex);
        flatListRef.current.scrollToIndex({
          index,
          animated: true,
        });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.carouselContainer}>
      <View>
        <FlatList
          ref={flatListRef}
          data={image}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        />
      </View>

      {/* indicator */}
      <View style={styles.IndicatiorContainer}>
        {image.map((_, index) => {
          return (
            <View
              key={index + generateUUID()}
              style={[
                styles.IndicatorCircle,
                {
                  backgroundColor:
                    activeIndex == index ? Colors.primary : Colors.muteGray,
                },
              ]}
            />
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
  Des: {fontSize: 16, color: '#fffffa'},
  IndicatiorContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 4,
  },
  IndicatorCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
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
