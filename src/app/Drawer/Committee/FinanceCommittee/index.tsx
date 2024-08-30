import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppScreenNavigationType,
  AppScreenRouteType,
} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import {Colors} from '../../../../constants/Color';
import {dummydataCommitteMember} from '../../../../schema/drawer/committee';
import MemberCard from './components/MemberCard';
import {useGetCommitteMembers} from '../../../../hooks/drawer/committee/committee';
import EmptyFlatList from '../../../../components/EmptyFlatList';
import ScreenDropDownSelector from '../../../../components/ScreenDropdownSelector';
import Loader from '../../../../components/Loader';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type FinanceCommitteeScreenProps = {} & AppScreenNavigationType &
  AppScreenRouteType;

// ----------------- ProvinceCommittee screen ---------------------
const FinanceCommitteeScreen: React.FC<FinanceCommitteeScreenProps> = ({
  navigation,
  route,
}) => {
  const {endpointType} = route.params as {endpointType: string};

  const [financeCommitteeMembers, setFinanceCommitteeMembers] = useState([]);

  const [DDSelectedYear, setDDSelectedYear] = useState<string>('2080');

  const {loading, error, handleGetMembers} = useGetCommitteMembers();

  //the district of the user nai as the district parameter pass hunu parchha
  const getCommitteeMembers = async (year: number) => {
    const membersResponse = await handleGetMembers(endpointType, year);
    if (membersResponse) {
      console.log('getCommitteeMembers Account: ', membersResponse);
    }
  };

  const {translateLanguage} = useTranslate();

  useEffect(() => {
    getCommitteeMembers(parseInt(DDSelectedYear));
  }, [DDSelectedYear]);
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Finance Committee', 'वित्त समिति')}
        />

        <ScreenDropDownSelector
          defaultValue="2080"
          callBackSetSelectedValue={setDDSelectedYear}
          ddViewWidth={160}
          options={[
            {label: '2070-2073', value: '2070'},
            {label: '2076-2079', value: '2076'},
            {label: '2080-2083', value: '2080'},
          ]}
        />

        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* all Sadsaya contents */}
          {financeCommitteeMembers ? (
            <View style={styles.MembersView}>
              {dummydataCommitteMember.map((member, _) => {
                if (member.Post === 'अध्यक्ष') {
                  return (
                    <View
                      key={member.Id + member.Name}
                      style={styles.TopMemberView}>
                      <MemberCard memberData={member} />
                    </View>
                  );
                } else {
                  return (
                    <View
                      key={member.Id + member.Name}
                      style={styles.OtherMemberView}>
                      <MemberCard memberData={member} />
                    </View>
                  );
                }
              })}
            </View>
          ) : loading ? (
            <Loader />
          ) : (
            <EmptyFlatList message="No memebers available now" />
          )}
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
