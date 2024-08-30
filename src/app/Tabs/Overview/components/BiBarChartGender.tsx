import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../constants/Color';
import {DIMENSION} from '../../../../constants/dimension';
import {ThemedText} from '../../../../components/ThemedText';

const BiBarChartGender: React.FC = () => {
  const barData = [
    {
      value: 40,
      age: '10-20',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 20, age: '10-20', label: 'Female', frontColor: '#ED6665'},
    {
      value: 50,
      age: '20-30',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 40, age: '10-20', label: 'Female', frontColor: '#ED6665'},
    {
      value: 75,
      age: '30-40',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 25, age: '10-20', label: 'Female', frontColor: '#ED6665'},
    {
      value: 30,
      age: '40-50',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 20, age: '10-20', label: 'Female', frontColor: '#ED6665'},
    {
      value: 60,
      age: '50-60',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 40, age: '10-20', label: 'Female', frontColor: '#ED6665'},
    {
      value: 65,
      age: '60-70',
      label: 'Male',
      spacing: 1,
      // labelWidth: 30,
      // labelTextStyle: {color: 'gray'},
      // frontColor: '#177AD5',
    },
    {value: 30, age: '10-20', label: 'Female', frontColor: '#ED6665'},
  ];

  return (
    <View style={styles.Container}>
      {/* <BarChart
        data={barData}
        barWidth={8}
        spacing={24}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{
          color: 'gray',
        }}
        noOfSections={10}
        maxValue={75}
      /> */}

      <BarChart
        roundedTop
        data={barData}
        showScrollIndicator={false}
        horizontal={true}
        barWidth={36} // Increase or adjust bar width as needed
        isAnimated
        // x-axis
        xAxisLabelTextStyle={styles.xAxisLabelTextStyle}
        xAxisLength={20}
        // y-axis
        yAxisAtTop={true}
        // yAxisLabelContainerStyle={{display: 'none'}}
        // yAxisColor={'green'}
        // rotateYAxisTexts={100}
        // yAxisTextStyle={{fontSize: 18}}
        showYAxisIndices={false}
        // colors
        showGradient
        frontColor={Colors.primaryLight} // Customize bar color
        gradientColor={Colors.primary}
        hideRules={false}
        // showXAxisIndices={true}
        shiftX={-45}
        // noOfSections={100} // Adjust to make the chart more granular
        stepValue={15} // Decrease this to handle smaller values better
        width={DIMENSION.SCREEN.width - 120}
        height={DIMENSION.SCREEN.height - 200}
        // showValuesAsTopLabel={true} // Show values on top of bars
        // initialSpacing={0} // Add initial spacing from the Y-axis
        spacing={12} // Adjust spacing between bars
        maxValue={80}
        renderTooltip={(item: {value: number; age: string}) => {
          return (
            <View style={styles.TooltipView}>
              <ThemedText type="mediumBold" style={styles.TooltipText}>
                [{item.age}]: {item.value}
              </ThemedText>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.background,
    paddingBottom: 40,
    borderRadius: 10,
    width: DIMENSION.SCREEN.width - 80,
    height: DIMENSION.SCREEN.height - 80,
  },
  xAxisLabelTextStyle: {
    color: 'white',
    fontSize: 16,
    width: 160,
    fontWeight: 600,
    textAlign: 'center',
  },
  TooltipView: {
    height: 36,
    marginLeft: -156,
    marginTop: 36,
    backgroundColor: Colors.greenDark,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.greenLightest,

    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
  },
  TooltipText: {
    textAlign: 'center',
    height: 'auto',
    color: Colors.greenLightest,
    paddingVertical: -1,
  },
});

export default BiBarChartGender;
