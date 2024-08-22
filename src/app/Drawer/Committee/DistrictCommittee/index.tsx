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
type DistrictCommitteeScreenProps = {} & AppScreenNavigationType & AppScreenRouteType;

// ----------------- DistrictCommittee screen ---------------------
const DistrictCommitteeScreen: React.FC<DistrictCommitteeScreenProps> = ({
  navigation,
  route
}) => {

  const { endpointType } = route.params as { endpointType: string };

  const [districtCommMembers, setDistrictCommMembers] = useState()

  const { loading, error, handleGetMembers } = useGetCommitteMembers()

  //the district of the user nai as the district parameter pass hunu parchha
  const getCommitteeMembers = async () => {
    const membersResponse = await handleGetMembers(endpointType, 2080, "kathmandu")
    if (membersResponse) {
      console.log("getCommitteeMembers District: ", membersResponse)
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
          screenTitle="District committee"
        />
        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          <View style={styles.MembersView}>
            {districtCommMembers ? <View>

              {
                dummydataCommitteMember.map((member, _) => {
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
                          memberData={member}
                        />
                      </View>
                    );
                  }
                })
              }
            </View>
              : <EmptyResponse message='No members available for now' />}
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

export default DistrictCommitteeScreen;
