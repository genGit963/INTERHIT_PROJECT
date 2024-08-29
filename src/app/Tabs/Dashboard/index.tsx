import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './components/Header';
import Caursol from './components/Caursol';
import TodayUpdate from './components/TodayUpdate';
import DashboardMenuCompoent from './components/DashboardMenu';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DrawerModal from '../../../components/Drawer';
import {DIMENSION} from '../../../constants/dimension';
import {useGetAllContributionEvents} from '../../../hooks/tabs/contribution/contribution';
import {SocietyContributionRespInterface} from '../../../schema/tabs/contribution/contributions.schema';

type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const DashboardScreen: React.FC<DashboardScreenProps> = ({navigation}) => {
  // handle DrawerModal
  const [isDrawerModalVisible, setDrawerModalVisible] =
    useState<boolean>(false);
  const [societyContributionData, setSocietyContributionData] = useState<
    SocietyContributionRespInterface[]
  >([]);

  const {handleGetContributionEvents} = useGetAllContributionEvents();

  const getContributionEventData = async () => {
    const getContributionEventResp = await handleGetContributionEvents();
    if (getContributionEventResp) {
      // console.log("Contribution events: ", getContributionEventResp)
      setSocietyContributionData(getContributionEventResp);
    }
  };

  useEffect(() => {
    getContributionEventData();
  }, []);

  return (
    <View style={styles.Page}>
      <Image
        source={require('../../../assets/images/Ellipse.png')}
        style={styles.TopBG}
      />
      <SafeAreaView>
        {/* header */}
        <Header callBackDrawerVisible={setDrawerModalVisible} />

        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* caursol */}

          <Caursol data={societyContributionData} navigation={navigation} />

          {/* today update */}
          <TodayUpdate />

          {/*Banshawali*/}
          <DashboardMenuCompoent navigation={navigation} />
        </ScrollView>
      </SafeAreaView>

      {isDrawerModalVisible && (
        <DrawerModal
          navigation={navigation}
          isVisible={isDrawerModalVisible}
          modalVisibile={setDrawerModalVisible}
        />
      )}

      <Image
        source={require('../../../assets/images/Ellipse.png')}
        style={styles.BottomBG}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#fff',
    flex: 1,
    width: DIMENSION.SCREEN.width,
    paddingHorizontal: 24,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  BackImage: {
    objectFit: 'cover',
  },
  TopBG: {
    position: 'absolute',
    top: -50,
    right: '5%',
    left: '50%',
    zIndex: -1,
    transform: [{rotate: '70deg'}],

    // backgroundColor: 'red',
    height: 300,
    width: 350,
  },
  MiddleBG: {
    position: 'absolute',
    bottom: '1%',
    left: 150,
    zIndex: -5,
    transform: [{rotate: '70deg'}],
    height: 300,
    width: 350,
  },

  BottomBG: {
    position: 'absolute',
    bottom: -80,
    right: -60,
    zIndex: -1,
    transform: [{rotate: '120deg'}],
    height: 300,
    width: 350,
  },
  ScrollView: {
    marginBottom: 10,
    paddingBottom: 30,
    zIndex: 1,
  },
  ScrollContent: {paddingBottom: 100},
  FlexText: {
    textAlign: 'center',
  },
});
