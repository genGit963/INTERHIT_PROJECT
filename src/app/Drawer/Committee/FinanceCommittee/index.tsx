import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { AppScreenNavigationType, AppScreenRouteType } from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import { Colors } from '../../../../constants/Color';
import { dummydataCommitteMember } from '../../../../schema/drawer/committee';
import MemberCard from './components/MemberCard';
import { useGetCommitteMembers } from '../../../../hooks/drawer/committee/committee';
import EmptyFlatList from '../../../../components/EmptyFlatList';

// types and interface
type FinanceCommitteeScreenProps = {} & AppScreenNavigationType & AppScreenRouteType;

// ----------------- ProvinceCommittee screen ---------------------
const FinanceCommitteeScreen: React.FC<FinanceCommitteeScreenProps> = ({
  navigation,
  route
}) => {
  const { endpointType } = route.params as { endpointType: string };

  const [financeCommitteeMembers, setFinanceCommitteeMembers] = useState()

  const { loading, error, handleGetMembers } = useGetCommitteMembers()

  //the district of the user nai as the district parameter pass hunu parchha
  const getCommitteeMembers = async () => {
    const membersResponse = await handleGetMembers(endpointType, 2080)
    if (membersResponse) {
      console.log("getCommitteeMembers Account: ", membersResponse)
    }
  }

  useEffect(() => {
    getCommitteeMembers()
  }, [])
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle="Finance Committee"
        />
        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          {financeCommitteeMembers ? <View style={styles.MembersView}>
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
          </View> : <EmptyFlatList message='No memebers available now' />}
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
  ScrollView: { marginBottom: 10, paddingBottom: 30 },
  ScrollContent: { paddingBottom: 100 },
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

export default FinanceCommitteeScreen;
