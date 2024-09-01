import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {PERMISSIONS} from 'react-native-permissions';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import {
  checkPermission,
  requestPermission,
} from '../../../../utils/permissions';
import {Colors} from '../../../../constants/Color';
import HeroButton from '../../../../components/HeroButton';

interface ImagePickerComponentProps {
  control: Control<any>;
  errors: FieldErrors;
  label: string;
  controllerName: string;
  isRequired: boolean;
}

const ChangeProfileImage: React.FC<ImagePickerComponentProps> = ({
  control,
  errors,
  label,
  controllerName,
  isRequired,
}) => {
  const [filename, setFilename] = useState<string | undefined>('');
  const [imageUri, setImageUri] = useState<string | undefined>('');
  const [_, setImageAsset] = useState<Asset | undefined>();

  const handleImageUpload = async (
    onChange: (value: Asset | undefined) => void,
  ) => {
    const imagePickerLauncher = async () => {
      const mediaOptions: ImageLibraryOptions = {
        mediaType: 'photo',
        selectionLimit: 1,
      };
      await launchImageLibrary(mediaOptions, (response) => {
        if (response.didCancel) {
          console.log('User canceled the image selection');
        } else if (response.assets) {
          const asset = response.assets[0];
          setFilename(asset.fileName);
          setImageUri(asset.uri);
          setImageAsset(asset);
          onChange(asset);
        }
      });
    };

    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
    await checkPermission(permission).then((res) => {
      if (!res) {
        requestPermission(permission).then((grantedResponse) => {
          if (grantedResponse) {
            imagePickerLauncher();
          }
        });
      } else {
        imagePickerLauncher();
      }
    });
  };

  return (
    <View style={styles.imagePickerContainer}>
      <Controller
        control={control}
        name={controllerName}
        render={({field: {onChange}}) => (
          <View style={styles.imagePickerBox}>
            <HeroButton
              btnText={'Change Profile'}
              varient="link"
              style={styles.ChangePPBtn}
              onPress={() => handleImageUpload(onChange)}
            />
          </View>
        )}
      />
      {errors[controllerName] && (
        <Text style={styles.error}>
          {errors[controllerName]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default ChangeProfileImage;

const styles = StyleSheet.create({
  imagePickerContainer: {
    marginVertical: 8,
  },
  imagePickerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  ChangePPBtn: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  error: {
    color: Colors.redMain,
    marginTop: 4,
  },
});
