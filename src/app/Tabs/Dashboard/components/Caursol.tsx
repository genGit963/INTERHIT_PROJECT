import { StyleSheet, ImageBackground, View, FlatList, Image } from 'react-native';
import React from 'react';
import { ThemedText } from '../../../../components/ThemedText';

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
    <View>
      <ImageBackground
        source={{ uri: item.uri }}
        imageStyle={styles.BackImage}
        style={styles.ImageBackground}>
        <View style={styles.TextView}>
          <ThemedText type="semiBold" style={styles.Title}>
            भवन निर्माण
          </ThemedText>
          <ThemedText type="default" style={styles.Des}>
            Organized By: गोदार थापा सेवा समाज दमक
          </ThemedText>
        </View>
      </ImageBackground>
    </View>
  );
};

const Caursol = () => {
  return (
    // <View style={styles.Container}>
    <FlatList
      style={styles.Flatlist}
      contentContainerStyle={styles.FlatListContent}
      data={image}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item, index) => item.id}
      horizontal
      pagingEnabled
    />
    // </View>
  );
};

export default Caursol;

const styles = StyleSheet.create({
  Flatlist: {
    padding: 4,
  },
  FlatListContent: {

    gap: 10,
    borderWidth: 1
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackImage: {
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
