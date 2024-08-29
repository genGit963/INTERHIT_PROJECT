import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ThemedText} from '../../../../components/ThemedText';
import {Colors} from '../../../../constants/Color';
import useTranslate from '../../../../hooks/language/translate';

// types
type ChartTogglerProps = {
  callBackSetChartToggle: (value: string) => void;
};

const ChartToggler: React.FC<ChartTogglerProps> = ({
  callBackSetChartToggle,
}) => {
  const [activeButton, setActiveButton] =
    useState<string>('pie-chart-province');

  const handlePress = (value: string) => {
    setActiveButton(value);
    callBackSetChartToggle(value);
  };

  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.TogglerContainer}>
      <TouchableOpacity
        onPress={() => handlePress('pie-chart-province')}
        style={
          activeButton === 'pie-chart-province'
            ? styles.activeTO
            : styles.inactiveTO
        }>
        <ThemedText
          type="mediumBold"
          style={
            activeButton === 'pie-chart-province'
              ? styles.activeText
              : styles.inactiveText
          }>
          {translateLanguage('Province', 'प्रदेश')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('bar-chart-district')}
        style={
          activeButton === 'bar-chart-district'
            ? styles.activeTO
            : styles.inactiveTO
        }>
        <ThemedText
          type="mediumBold"
          style={
            activeButton === 'bar-chart-district'
              ? styles.activeText
              : styles.inactiveText
          }>
          {translateLanguage('District', 'जिल्ला')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('bi-bar-chart-gender')}
        style={
          activeButton === 'bi-bar-chart-gender'
            ? styles.activeTO
            : styles.inactiveTO
        }>
        <ThemedText
          type="mediumBold"
          style={
            activeButton === 'bi-bar-chart-gender'
              ? styles.activeText
              : styles.inactiveText
          }>
          {translateLanguage('Age', 'उमेर')}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default ChartToggler;

const styles = StyleSheet.create({
  TogglerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 3,
    gap: 20,
  },
  activeText: {
    color: Colors.primary,
    fontSize: 16,
  },
  inactiveText: {
    color: 'black',
    fontSize: 16,
  },
  activeTO: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  inactiveTO: {},
});
