import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { Colors } from '../../../../constants/Color';
import { useGetPopByDistrict } from '../../../../hooks/tabs/overview/district';

const data = [
  { value: 50, label: 'District 1', frontColor: 'purple' },
  { value: 30, label: 'District 2', frontColor: 'orange' },
  { value: 70, label: 'District 3', frontColor: 'blue' },
  { value: 70, label: 'District 4', frontColor: 'orange' },
  { value: 70, label: 'District 6', frontColor: 'red' },
];

const BarChartDistricts: React.FC = () => {

  // fetch pop_data by district
  const { loading, error, handleGetPopByDistrict } = useGetPopByDistrict()

  const getPopByDistrict = async () => {
    await handleGetPopByDistrict().then((Resp) => {
      console.log("Population response by district: ", Resp)
    })
  }

  useEffect(() => {
    getPopByDistrict()
  }, [])

  return (
    <View style={styles.ChartContainer}>
      <BarChart
        data={data}
        horizontal={true}
        barWidth={30}
        yAxisLabelWidth={60}
        xAxisLabelTextStyle={{ color: 'black' }}
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
