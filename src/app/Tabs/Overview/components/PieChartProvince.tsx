import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useGetPopByProvince } from '../../../../hooks/tabs/overview/province';
import Loader from '../../../../components/Loader';

interface IProvincePopulation {
  name: string;
  text: string;
  value: number;
  color?: string;
}

//because the backend_resp is {name, value} only, ani piechart lai label chai text key le pathauna,
//also to differentiate, colors assign gareko aafai
const createProvinceData = (
  name: string,
  value: number,
  color: string,
): IProvincePopulation => {
  return {
    name,
    value,
    text: name,
    color,
  };
};

const PieChartProvince: React.FC = () => {
  const [provinceData, setProvinceData] = useState<IProvincePopulation[]>([]);

  const { loading, error, handleGetPopByProvince } = useGetPopByProvince();

  useEffect(() => {
    getPopByProvinceData();
  }, []);

  //asign proper colors later
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'black', 'white'];

  const getPopByProvinceData = async () => {
    await handleGetPopByProvince().then((provinceResponse) => {

      const mappedData = provinceResponse.map(
        (item: { name: string; value: number }, index: any) => {
          return createProvinceData(
            item.name,
            item.value,
            colors[index % provinceResponse.length],
          );
        },
      );

      setProvinceData(mappedData);
    });
  };

  return (
    <View style={styles.PieContainer}>
      <ThemedText type="semiBold" style={styles.PieTitle}>
        विभिन्न प्रदेशमा बन्धु संख्या
      </ThemedText>
      <PieChart data={provinceData} focusOnPress />

      <View style={styles.legendContainer}>
        {provinceData.length > 0
          ? provinceData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <ThemedText style={styles.legendText}>{item.name}</ThemedText>
              <ThemedText type="mediumBold"> {item.value}</ThemedText>
            </View>
          ))
          : loading && <Loader />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PieContainer: {
    marginVertical: 30,
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.screenBackground,
  },
  PieTitle: {
    fontSize: 22,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 16,
  },
  legendContainer: {
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'flex-start',
    padding: 20,
    marginVertical: 30,
  },
  legendItem: {
    // borderWidth: 1,
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
});

export default PieChartProvince;
