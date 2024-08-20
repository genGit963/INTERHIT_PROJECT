import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useGetPopByProvince } from '../../../../hooks/tabs/overview/province';

const data = [
  {
    text: 'कोशी प्रदेश',
    value: 50,
    color: 'green',
  },
  {
    text: 'गण्डकी प्रदेश',
    value: 72,
    color: 'blue',
  },
  {
    text: 'बागमती प्रदेश',
    value: 33,
    color: 'red',
  },
  {
    text: 'लुम्बिनी प्रदेश',
    value: 85,
    color: 'yellow',
  },
  {
    text: 'मधेश प्रदेश',
    value: 64,
    color: 'purple',
  },
  {
    text: 'कर्णाली प्रदेश',
    value: 28,
    color: 'orange',
  },
  {
    text: 'सुदूरपश्चिम प्रदेश',
    value: 91,
    color: 'pink',
  },
];

const PieChartProvince: React.FC = () => {

  const { loading, error, handleGetPopByProvince } = useGetPopByProvince()

  useEffect(() => {
    getPopByProvinceData()
  }, [])

  const getPopByProvinceData = async () => {
    await handleGetPopByProvince().then((Resp) => {
      console.log("Pop by district resp: ", Resp)
    })
  }


  return (
    <View style={styles.PieContainer}>
      <ThemedText type="semiBold" style={styles.PieTitle}>
        विभिन्न प्रदेशमा बन्धु संख्या
      </ThemedText>
      <PieChart data={data} focusOnPress />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <ThemedText style={styles.legendText}>{item.text}</ThemedText>
          </View>
        ))}
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
