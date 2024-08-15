import {Image, Platform, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import HeroButton from '../../../../../../components/HeroButton';
import {
  checkPermission,
  requestPermission,
} from '../../../../../../utils/permissions';
import {PERMISSIONS} from 'react-native-permissions';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

const UploadImage = () => {
  const [imageName, setImageName] = useState<string | undefined>('');
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  const imagePicker = () => {
    const mediaOptions: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 1,
    };
    launchImageLibrary(mediaOptions, (mediaResponse) => {
      if (mediaResponse.didCancel) {
        console.log('Image upload canceled');
      }
      if (mediaResponse.assets) {
        const {uri, fileName} = mediaResponse.assets[0];
        setImageName(fileName);
        setImageUri(uri);
      }
    });
  };

  const handleImageUpload = async () => {
    //permission according to the platform
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const permissionStatus = await checkPermission(permission); //returns true or false

    if (!permissionStatus) {
      requestPermission(permission).then((permissionResponse) => {
        if (permissionResponse) {
          imagePicker();
        } else {
          console.log('permission response failuree');
        }
      });
    } else {
      imagePicker();
    }
  };

  return (
    <View>
      <HeroButton
        btnText={imageName ? imageName : 'Upload Image'}
        onPress={handleImageUpload}
        varient="outlined"
      />
      {imageUri && (
        <Image source={{uri: imageUri}} style={styles.Imageupload} />
      )}
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  Imageupload: {height: 50, width: 50},
});
