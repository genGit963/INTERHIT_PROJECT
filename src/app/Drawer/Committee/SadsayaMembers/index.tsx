import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {Colors} from '../../../../constants/Color';
import {dummydataCommitteMember} from '../../../../schema/drawer/committee';
import SadsayaCard from './components/SadsayaCard';

// types and interface
type SadhashyaMemberScreenProps = {} & AppScreenNavigationType;

// ----------------- SadhashyaMember screen ---------------------
const SadhashyaMemberScreen: React.FC<SadhashyaMemberScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle="Sadhashya Member"
        />
        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          <View style={styles.SadhsayaMembersView}>
            {dummydataCommitteMember.map((sadhsaya, _) => {
              if (sadhsaya.Post === 'अध्यक्ष') {
                return (
                  <View key={sadhsaya.Id} style={styles.TopMemberView}>
                    <SadsayaCard
                      key={sadhsaya.Id + sadhsaya.Name}
                      sadhsaya={sadhsaya}
                    />
                  </View>
                );
              } else {
                return (
                  <View key={sadhsaya.Id} style={styles.OtherMemberView}>
                    <SadsayaCard key={sadhsaya.Id} sadhsaya={sadhsaya} />
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
  ScrollView: {marginBottom: 10, paddingBottom: 40},
  ScrollContent: {paddingBottom: 140},
  SadhsayaMembersView: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    flexWrap: 'wrap',
  },
  TopMemberView: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  OtherMemberView: {},
});

export default SadhashyaMemberScreen;
