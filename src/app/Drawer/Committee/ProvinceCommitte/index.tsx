import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { AppScreenNavigationType, AppScreenRouteType } from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import { Colors } from '../../../../constants/Color';
import { dummydataCommitteMember } from '../../../../schema/drawer/committee';
import MemberCard from './components/MemberCard';
import { useGetCommitteMembers } from '../../../../hooks/drawer/committee/committee';
import EmptyResponse from '../../../../components/EmptyResponse';

// types and interface
type ProvinceCommitteeScreenProps = {} & AppScreenNavigationType & AppScreenRouteType;

// ----------------- ProvinceCommittee screen ---------------------
const ProvinceCommitteeScreen: React.FC<ProvinceCommitteeScreenProps> = ({
  navigation,
  route
}) => {
  const { endpointType } = route.params as { endpointType: string };

  const [provinceCommitteeMembers, setProvinceCommitteeMembers] = useState()

  const { loading, error, handleGetMembers } = useGetCommitteMembers()

  //the district of the user nai as the district parameter pass hunu parchha
  const getCommitteeMembers = async () => {
    const membersResponse = await handleGetMembers(endpointType, 2080, null, "कोशी प्रदेश")
    if (membersResponse) {
      console.log("getCommitteeMembers Province: ", membersResponse)
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
          screenTitle="Province committee"
        />
        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          {provinceCommitteeMembers ? <View style={styles.MembersView}>
            {dummydataCommitteMember.map((member, _) => {
              if (member.Post === 'अध्यक्ष') {
                return (
                  <View style={styles.TopMemberView} key={member.Id + member.Name}>
                    <MemberCard

                      memberData={member}
                    />
                  </View>
                );
              } else {
                return (
                  <View style={styles.OtherMemberView} key={member.Id + member.Name}>
                    <MemberCard
                      key={member.Id + member.Name}
                      memberData={member}
                    />
                  </View>
                );
              }
            })}
          </View> : <EmptyResponse message='No members now' />}
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

export default ProvinceCommitteeScreen;
