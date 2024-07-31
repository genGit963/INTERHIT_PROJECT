import {View, StyleSheet} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../components/ThemedText';
import {Colors} from '../../../constants/Color';
import BirthdaySvg from '../../../assets/svg/gift_parcel.svg';
import AnniversarySvg from '../../../assets/svg/circled_heart.svg';
import DeathSvg from '../../../assets/svg/sad_emoji.svg';

const TodayUpdate = () => {
  return (
    <View style={styles.Container}>
      <View>
        <ThemedText type="mediumBold" style={styles.Today}>
          Today, {new Date().toDateString()}
        </ThemedText>
      </View>

      {/* Today Report */}
      <View style={styles.TodayReport}>
        {/* Birthday */}
        <View style={styles.ReportCard}>
          <BirthdaySvg height={45} width={45} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              237
            </ThemedText>
            <ThemedText style={styles.ReportNumber}>Birthday</ThemedText>
          </View>
        </View>

        {/* Anniversary */}
        <View style={styles.ReportCard}>
          <AnniversarySvg height={45} width={45} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              67
            </ThemedText>
            <ThemedText style={styles.ReportNumber}>Anniversary</ThemedText>
          </View>
        </View>

        {/* Death */}
        <View style={styles.ReportCard}>
          <DeathSvg height={38} width={38} />
          <View style={styles.ReportDetail}>
            <ThemedText style={styles.ReportNumber} type="semiBold">
              112
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
    marginVertical: 8,
  },
  Today: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
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
  ReportDetail: {marginLeft: 4, paddingHorizontal: 6, alignItems: 'center'},
});
