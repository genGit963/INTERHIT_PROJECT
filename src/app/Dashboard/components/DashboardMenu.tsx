import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../components/ThemedText';
import {menuScreenData} from '../menu-data';
import {Colors} from '../../../constants/Color';

import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DashboardMenuComponentProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const DashboardMenuComponent: React.FC<DashboardMenuComponentProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Container}>
      <View>
        <ThemedText style={styles.Title} type="mediumBold">
          Banshawali
        </ThemedText>
      </View>

      {/* dashboard menu */}
      <View style={styles.MenuContainer}>
        {menuScreenData.map((item, _) => (
          <TouchableOpacity
            key={item.route}
            style={styles.MenuCard}
            onPress={() => navigation.navigate(item.route)}>
            <item.Icon />
            <ThemedText style={styles.MenuLabel} type="mediumBold">
              {item.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DashboardMenuComponent;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 0,
    zIndex: 2,
  },
  Title: {
    fontSize: 18,
  },
  MenuContainer: {
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'space-between',
  },
  MenuCard: {
    height: 90,
    width: 110,
    borderWidth: 1,
    borderColor: Colors.shadow,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuIcon: {
    height: 30,
    width: 30,
  },
  MenuLabel: {
    textAlign: 'center',
    lineHeight: 16,
    padding: 4,
  },
});
