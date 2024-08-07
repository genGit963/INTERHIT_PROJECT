import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../constants/Color';

const data = [
  {value: 50, label: 'District 1', frontColor: 'purple'},
  {value: 30, label: 'District 2', frontColor: 'orange'},
  {value: 70, label: 'District 3', frontColor: 'blue'},
  {value: 70, label: 'District 4', frontColor: 'orange'},
  {value: 70, label: 'District 6', frontColor: 'red'},
];

const BarChartDistricts: React.FC = () => {
  return (
    <View style={styles.ChartContainer}>
      <BarChart
        data={data}
        horizontal={true}
        barWidth={30}
        yAxisLabelWidth={60}
        xAxisLabelTextStyle={{color: 'black'}}
        hideRules={true}
        showXAxisIndices={true}
        initialSpacing={10}
      />
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

export default BarChartDistricts;
