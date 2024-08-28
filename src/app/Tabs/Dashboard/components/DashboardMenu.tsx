import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemedText} from '../../../../components/ThemedText';
import {menuScreenData} from '../menu-data';
import {Colors} from '../../../../constants/Color';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import {Language} from '../../../../context/language';

type DashboardMenuComponentProps = {
  language: string;
} & AppScreenNavigationType;

const DashboardMenuComponent: React.FC<DashboardMenuComponentProps> = ({
  navigation,
  language,
}) => {
  console.log(language);
  return (
    <View style={styles.Container}>
      <View>
        <ThemedText style={styles.Title} type="mediumBold">
          {language === Language.NP ? 'वंशवली' : 'Banshawali'}
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
            {language === Language.NP ? (
              <ThemedText style={styles.MenuLabel} type="mediumBold">
                {item.labelNP}
              </ThemedText>
            ) : (
              <ThemedText style={styles.MenuLabel} type="mediumBold">
                {item.labelEN}
              </ThemedText>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DashboardMenuComponent;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 4,
    zIndex: 2,
  },
  Title: {
    fontSize: 18,
    marginBottom: 8,
  },
  MenuContainer: {
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    justifyContent: 'space-between',
  },
  MenuCard: {
    height: 80,
    width: 100,
    borderWidth: 1,
    borderColor: Colors.shadow,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuIcon: {
    height: 26,
    width: 26,
  },
  MenuLabel: {
    textAlign: 'center',
    lineHeight: 16,
    padding: 4,
  },
});
