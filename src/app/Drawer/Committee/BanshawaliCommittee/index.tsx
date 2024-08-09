import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {Colors} from '../../../../constants/Color';
import {dummydataCommitteMember} from '../../../../schema/drawer/committee';
import MemberCard from './components/MemberCard';

// types and interface
type BanshawaliCommitteeScreenProps = {} & AppScreenNavigationType;

// ----------------- ProvinceCommittee screen ---------------------
const BanshawaliCommitteeScreen: React.FC<BanshawaliCommitteeScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle="Banshawali Committee"
        />
        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          <View style={styles.MembersView}>
            {dummydataCommitteMember.map((member, _) => {
              if (member.Post === 'अध्यक्ष') {
                return (
                  <View style={styles.TopMemberView}>
                    <MemberCard
                      key={member.Id + member.Name}
                      memberData={member}
                    />
                  </View>
                );
              } else {
                return (
                  <View style={styles.OtherMemberView}>
                    <MemberCard
                      key={member.Id + member.Name}
                      memberData={member}
                    />
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
  ScrollView: {marginBottom: 10, paddingBottom: 30},
  ScrollContent: {paddingBottom: 100},
  MembersView: {
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

export default BanshawaliCommitteeScreen;
