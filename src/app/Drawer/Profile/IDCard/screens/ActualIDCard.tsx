// import React, {useRef, useEffect, useCallback} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Button,
//   Alert,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import Svg, {Rect} from 'react-native-svg';
// import ViewShot from 'react-native-view-shot';
// import * as RNFS from '@dr.pogodin/react-native-fs';
// import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

// const requestStoragePermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission Required',
//           message: 'This app needs access to your storage to save photos',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   } else if (Platform.OS === 'ios') {
//     const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
//     return result === RESULTS.GRANTED;
//   }
//   return false;
// };

// const IDCardScreen = () => {
//   const viewShotRef = useRef<ViewShot>(null);

//   const onCapture = useCallback(async (uri: string) => {
//     try {
//       const downloadPath = `${RNFS.DownloadDirectoryPath}/IDCard.png`;
//       await RNFS.moveFile(uri, downloadPath);
//       Alert.alert('Download Complete', `ID card saved to: ${downloadPath}`);
//     } catch (error) {
//       console.error('Error saving ID card:', error);
//       Alert.alert('Error', 'Failed to save ID card');
//     }
//   }, []);

//   useEffect(() => {
//     (async () => {
//       const hasPermission = await requestStoragePermission();
//       if (hasPermission) {
//         viewShotRef.current?.capture().then(onCapture);
//       } else {
//         Alert.alert(
//           'Permission Denied',
//           'Storage permission is required to save the ID card',
//         );
//       }
//     })();
//   }, [onCapture]);

//   const downloadIDCard = async () => {
//     const hasPermission = await requestStoragePermission();
//     if (hasPermission) {
//       viewShotRef.current?.capture().then(onCapture);
//     } else {
//       Alert.alert(
//         'Permission Denied',
//         'Storage permission is required to save the ID card',
//       );
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
//         <View style={styles.card}>
//           <View style={styles.header}>
//             <Image
//               source={{uri: 'https://example.com/logo.png'}}
//               style={styles.logo}
//             />
//             <Text style={styles.title}>Godar Thapa Sewa Samaj</Text>
//           </View>
//           <View style={styles.idContainer}>
//             <Svg height="150" width="100%" viewBox="0 0 100 100">
//               <Rect x="0" y="0" width="100" height="100" fill="#003366" />
//             </Svg>
//             <Image
//               source={{uri: 'https://example.com/user-photo.jpg'}}
//               style={styles.avatar}
//             />
//             <Text style={styles.name}>Kamala Godar Thapa</Text>
//             <Text style={styles.position}>Executive Chairman</Text>
//             <Text style={styles.location}>Jhapa</Text>
//           </View>
//           <View style={styles.details}>
//             <Text style={styles.detail}>Province: Koshi</Text>
//             <Text style={styles.detail}>District: Jhapa</Text>
//             <Text style={styles.detail}>Municipality: Arjundhara</Text>
//             <Text style={styles.detail}>Ward no.: 15</Text>
//             <Text style={styles.detail}>Blood group: A+</Text>
//             <Text style={styles.detail}>Pusta no.: 5</Text>
//             <Text style={styles.detail}>Birth place: Morang</Text>
//             <Text style={styles.detail}>Mobile no.: 9888000000</Text>
//           </View>
//           <View style={styles.footer}>
//             <Text style={styles.signature}>Kuber Singh Godar Thapa</Text>
//             <Text style={styles.positionFooter}>Chairman</Text>
//           </View>
//         </View>
//       </ViewShot>
//       <Button title="Download" onPress={downloadIDCard} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   card: {
//     width: '100%',
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//   },
//   title: {
//     marginLeft: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#003366',
//   },
//   idContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginTop: -50,
//     borderWidth: 5,
//     borderColor: '#fff',
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#003366',
//     marginVertical: 5,
//   },
//   position: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 5,
//   },
//   location: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   details: {
//     marginBottom: 20,
//   },
//   detail: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//   },
//   footer: {
//     alignItems: 'center',
//   },
//   signature: {
//     fontSize: 16,
//     color: '#333',
//   },
//   positionFooter: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default IDCardScreen;
