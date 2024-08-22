import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from '../../../../constants/Color';
import BirthdaySvg from '../../../../assets/svg/gift_parcel.svg';
import AnniversarySvg from '../../../../assets/svg/circled_heart.svg';
import DeathSvg from '../../../../assets/svg/sad_emoji.svg';
import NepaliDate from 'nepali-datetime';
import { useGetStatistics } from '../../../../hooks/tabs/dashboard/statistics';


interface todayUpdate {
  total_created: number,
  created_today: number,
  birthday_today: number,
  anniversary_today: number,
  death_anniversary_today: number,
}

const TodayUpdate = () => {

  const [todayStats, setTodayStats] = useState<todayUpdate>({
    created_today: 0,
    total_created: 0,
    birthday_today: 0,
    anniversary_today: 0,
    death_anniversary_today: 0
  })

  const todayDate_Nepali = new NepaliDate().formatNepali("dddd MMMM DD YYYY")

  const { loading, error, handleGetStatistics } = useGetStatistics()

  const getStatsData = async () => {
    const statsData = await handleGetStatistics()
    // console.log("resp", Resp)
    if (statsData) {
      setTodayStats(statsData)
    }

  }

  useEffect(() => {
    getStatsData()
  }, [])


  return (
    <View style={styles.Container}>
      <View>

        <ThemedText type="mediumBold" style={styles.Today}>
          आज, {todayDate_Nepali}
        </ThemedText>
      </View>

      {/* Today Report */}
      <View style={styles.TodayReport}>
        {/* Birthday */}
        <View style={styles.ReportCard}>
          <BirthdaySvg height={45} width={45} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              {todayStats.birthday_today}
            </ThemedText>
            <ThemedText style={styles.ReportNumber}>Birthday</ThemedText>
          </View>
        </View>

        {/* Anniversary */}
        <View style={styles.ReportCard}>
          <AnniversarySvg height={45} width={45} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              {todayStats.anniversary_today}
            </ThemedText>
            <ThemedText style={styles.ReportNumber}>Anniversary</ThemedText>
          </View>
        </View>

        {/* Death */}
        <View style={styles.ReportCard}>
          <DeathSvg height={38} width={38} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              {todayStats.death_anniversary_today}
            </ThemedText>
            <ThemedText style={styles.ReportNumber}>Death</ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayUpdate;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 12,
  },
  Today: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
    paddingVertical: 2
  },
  TodayReport: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  ReportCard: {
    marginVertical: 8,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.shadow,
    padding: 8,
    // elevation: 5,
    // ...supplyShadowEffect({
    //   X_off: 0,
    //   Y_off: 0,
    //   Radius: 10,
    //   Color: '#000',
    //   Opacity: 0.2,
    // }),
  },
  ReportNumber: {
    textAlign: 'center',
    alignItems: 'center',
  },
  ReportDetail: { marginLeft: 4, paddingHorizontal: 6, alignItems: 'center' },
});
