import {StyleSheet, ImageBackground, View} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../../components/ThemedText';

const Caursol = () => {
  const image = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUJr0DxQCv1qjcqhOLDl0C6MR3Rk762KQ-w&s',
  };
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={image}
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

export default Caursol;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 16,
    height: 150,
    width: '100%',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
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
  Des: {fontSize: 16, color: '#fffffa'},
});
