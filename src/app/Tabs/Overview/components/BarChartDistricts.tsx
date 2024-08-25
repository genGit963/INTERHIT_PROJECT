import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { Colors } from '../../../../constants/Color';
import { useGetPopByDistrict } from '../../../../hooks/tabs/overview/district';
import { DIMENSION } from '../../../../constants/dimension';

interface IDistrictPopulation {
  label: string,
  value: number
}

const createPopulationData = (district: string, population: number): IDistrictPopulation => {
  return {
    label: district,
    value: population
  }
}

const BarChartDistricts: React.FC = () => {
  const [districtPopulation, setDistrictPopulation] = useState<IDistrictPopulation[]>([]);
  const { loading, error, handleGetPopByDistrict } = useGetPopByDistrict();

  const getPopByDistrict = async () => {
    await handleGetPopByDistrict().then((Resp) => {
      const mappedData = Resp.map((item: { district: string, population: number }) => {
        return createPopulationData(item.district, item.population);
      });
      setDistrictPopulation(mappedData);
    });
  };

  useEffect(() => {
    getPopByDistrict();
  }, []);

  return (
    <ScrollView horizontal>
      <View style={styles.ChartContainer}>
        {districtPopulation.length > 0 && (
          <BarChart
            data={districtPopulation}
            horizontal={true}
            barWidth={30} // Increase or adjust bar width as needed
            xAxisLabelTextStyle={{ color: 'black' }}
            hideRules={true}
            showXAxisIndices={true}
            shiftX={-20}
            noOfSections={20} // Adjust to make the chart more granular
            stepValue={1} // Decrease this to handle smaller values better
            width={DIMENSION.SCREEN.width}
            height={DIMENSION.SCREEN.height}
            showValuesAsTopLabel={true} // Show values on top of bars

            // valueTextStyle={{ color: 'black', fontWeight: 'bold' }} // Customize value text style
            initialSpacing={15} // Add initial spacing from the Y-axis
            spacing={30} // Adjust spacing between bars
            frontColor={Colors.primaryLight} // Customize bar color
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ChartContainer: {
    backgroundColor: Colors.screenBackground,
    paddingVertical: 30,
    // paddingHorizontal: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: DIMENSION.SCREEN.width,
    height: DIMENSION.SCREEN.height,
    marginBottom: 250
  },
});

export default BarChartDistricts;
