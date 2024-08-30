import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {Colors} from '../../../../constants/Color';
import {useGetPopByDistrict} from '../../../../hooks/tabs/overview/district';
import {DIMENSION} from '../../../../constants/dimension';
import Loader from '../../../../components/Loader';
import ApiError from '../../../../components/api/ApiError';

interface IDistrictPopulation {
  label: string;
  value: number;
}

const createPopulationData = (
  district: string,
  population: number,
): IDistrictPopulation => {
  return {
    label: district,
    value: population,
  };
};

const BarChartDistricts: React.FC = () => {
  const [districtPopulation, setDistrictPopulation] = useState<
    IDistrictPopulation[]
  >([]);
  const {loading, error, handleGetPopByDistrict} = useGetPopByDistrict();

  const getPopByDistrict = async () => {
    await handleGetPopByDistrict().then((Resp) => {
      const mappedData = Resp.map(
        (item: {district: string; population: number}) => {
          return createPopulationData(item.district, item.population);
        },
      );
      setDistrictPopulation(mappedData);
    });
  };

  useEffect(() => {
    getPopByDistrict();
  }, []);

  if (error) {
    return <ApiError message={'Bar Processing Failed !'} />;
  }

  // max value finder

  const maxValue = (data: IDistrictPopulation[]): number => {
    const maxItem = data.reduce((prev, current) => {
      return prev.value > current.value ? prev : current;
    });

    return maxItem.value + 150;
  };

  return !loading ? (
    <View style={styles.ChartContainer}>
      {districtPopulation.length > 0 && (
        <BarChart
          data={districtPopulation}
          showScrollIndicator={false}
          horizontal={true}
          barWidth={36} // Increase or adjust bar width as needed
          isAnimated
          // x-axis
          xAxisLabelTextStyle={{
            color: 'black',
            fontSize: 16,
            width: 130,
            height: 30,
            fontWeight: 700,
            textAlign: 'right',
          }}
          // y-axis
          // yAxisAtTop={true}
          // yAxisLabelContainerStyle={{display: 'none'}}
          // yAxisColor={'green'}
          // rotateYAxisTexts={100}
          // yAxisTextStyle={{fontSize: 18}}
          showYAxisIndices={false}
          // colors
          showGradient
          frontColor={Colors.primaryLight} // Customize bar color
          gradientColor={Colors.primary}
          // hideRules={true}
          // showXAxisIndices={true}
          shiftX={-45}
          // noOfSections={100} // Adjust to make the chart more granular
          stepValue={100} // Decrease this to handle smaller values better
          width={DIMENSION.SCREEN.width - 120}
          height={DIMENSION.SCREEN.height - 200}
          // showValuesAsTopLabel={true} // Show values on top of bars
          // initialSpacing={0} // Add initial spacing from the Y-axis
          spacing={1} // Adjust spacing between bars
          maxValue={districtPopulation ? maxValue(districtPopulation) : 800}
        />
      )}
    </View>
  ) : (
    <Loader />
  );
};

const styles = StyleSheet.create({
  ChartContainer: {
    backgroundColor: Colors.screenBackground,
    // flex: 1,
    // borderWidth: 1,
    width: DIMENSION.SCREEN.width - 80,
    height: DIMENSION.SCREEN.height - 80,
    // marginBottom: 250,
  },
});

export default BarChartDistricts;
