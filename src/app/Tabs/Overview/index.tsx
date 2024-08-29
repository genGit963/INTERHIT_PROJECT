import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import {Colors} from '../../../constants/Color';
import ChartToggler from './components/ChartToggler';
import PieChartProvince from './components/PieChartProvince';
import BarChartDistricts from './components/BarChartDistricts';
import BiBarChartGender from './components/BiBarChartGender';
import useTranslate from '../../../hooks/language/translate';

// types and interface
type OverviewTabScreenProps = {} & AppScreenNavigationType;

// ----------------- Overivew Tab Screen ---------------------
const OverviewTabScreen: React.FC<OverviewTabScreenProps> = ({navigation}) => {
  // Chart value toggle
  const [chartToggle, setChartToggle] = useState<string>('pie-chart-province');

  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage('Overview', 'अवलोकन')}
        />

        {/* Chart Toggler Hrz Bar */}
        <ChartToggler callBackSetChartToggle={setChartToggle} />

        {/*  Screen Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Pie Chart */}
          {chartToggle === 'pie-chart-province' && <PieChartProvince />}

          {/* Bar Chart */}
          {chartToggle === 'bar-chart-district' && <BarChartDistricts />}

          {/* Bi-Bar Chart  */}
          {chartToggle === 'bi-bar-chart-gender' && <BiBarChartGender />}
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
  ScrollView: {marginBottom: 10},
  ScrollContent: {paddingBottom: 180},
});

export default OverviewTabScreen;
