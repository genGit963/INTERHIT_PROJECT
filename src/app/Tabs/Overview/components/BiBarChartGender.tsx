import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../constants/Color';

const data = [
  {value: 50, label: 'Male', frontColor: 'purple'},
  {value: 30, label: 'Female', frontColor: 'orange'},
  {value: 50, label: 'Male', frontColor: 'purple'},
  {value: 30, label: 'Female', frontColor: 'orange'},
];

const BiBarChartGender: React.FC = () => {
  return (
    <View style={styles.ChartContainer}>
      <BarChart data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  ChartContainer: {
    flex: 1,
    backgroundColor: Colors.screenBackground,
    marginVertical: 30,
  },
});

export default BiBarChartGender;
