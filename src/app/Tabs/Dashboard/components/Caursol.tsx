import {
  StyleSheet,
  ImageBackground,
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from '../../../../constants/Color';
import { generateUUID } from '../../../../utils/uuid-generator';
import { SocietyContributionRespInterface } from '../../../../schema/tabs/contribution/contributions.schema';
import EmptyResponse from '../../../../components/EmptyResponse';
import Loader from '../../../../components/Loader';

const { width } = Dimensions.get('screen');

interface CarouselInterface {
  data: SocietyContributionRespInterface[];
}

type RenderItemProps = {
  item: SocietyContributionRespInterface;
};

const RenderItem: React.FC<RenderItemProps> = ({ item }) => {
  return (
    <View style={styles.imageContainer} key={item._id}>
      <ImageBackground
        source={{ uri: item.image.secure_url }}
        style={styles.ImageBackground}>
        <View style={styles.TextView}>
          <ThemedText type="semiBold" style={styles.Title}>
            {item.title}
          </ThemedText>
          <ThemedText type="default" style={styles.Des}>
            Organized By: {item.organizer}
          </ThemedText>
        </View>
      </ImageBackground>
    </View>
  );
};

const Carousel: React.FC<CarouselInterface> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
        const nextIndex = (activeIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setActiveIndex(nextIndex);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  return (
    <View style={styles.carouselContainer}>
      {data.length > 0 ? <View>
        <View>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item._id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
          />
        </View>

        {/* Indicator */}
        <View style={styles.IndicatorContainer}>
          {data.map((_, index) => (
            <View
              key={generateUUID()}
              style={[
                styles.IndicatorCircle,
                {
                  backgroundColor:
                    activeIndex === index ? Colors.primary : Colors.muteGray,
                },
              ]}
            />
          ))}
        </View>
      </View> : null}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    width: width - 48, // Subtracting the padding of the original container
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    width: width - 48, // Image container manually set to fit within the container
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
  Des: {
    fontSize: 16,
    color: '#fffffa',
  },
  IndicatorContainer: {
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
