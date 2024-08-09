// This dropdown is for filter type and other selection on screen

import React from 'react';
import {View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {ThemedText} from './ThemedText';
import {Colors} from '../constants/Color';

// svg
import DropDownSvg from '../assets/svg/chevron-right.svg';

interface ScreenDropDownSelectorProps {
  options: {label: string; value: string}[]; // Removed icon field
  defaultValue: string;
  callBackSetSelectedValue: (value: string) => void;
  ddViewWidth: number;
}

const ScreenDropDownSelector: React.FC<ScreenDropDownSelectorProps> = ({
  options,
  defaultValue,
  callBackSetSelectedValue,
  ddViewWidth,
}) => {
  return (
    <View style={[styles.inputContainer, {width: ddViewWidth}]}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, _) =>
          callBackSetSelectedValue(selectedItem.value as string)
        }
        defaultValue={options.find((option) => option.value === defaultValue)}
        renderButton={(selectedItem, isOpened) => (
          <View style={styles.dropdownButtonStyle}>
            <ThemedText style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.label) || 'Select an option'}
            </ThemedText>
            <ThemedText style={styles.dropdownButtonArrowStyle}>
              {isOpened ? (
                <DropDownSvg style={styles.DDSvgOpen} />
              ) : (
                <DropDownSvg style={styles.DDSvgClose} />
              )}
              {/* Placeholder arrow */}
            </ThemedText>
          </View>
        )}
        renderItem={(item, _, isSelected) => (
          <View
            style={[
              styles.dropdownItemStyle,
              // eslint-disable-next-line react-native/no-inline-styles
              isSelected && {backgroundColor: '#D2D9DF'},
            ]}>
            <ThemedText style={styles.dropdownItemTxtStyle}>
              {item.label}
            </ThemedText>
          </View>
        )}
        dropdownStyle={styles.dropdownMenuStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: Colors.text,
  },
  dropdownButtonStyle: {
    width: '100%',
    height: 'auto',
    // borderWidth: 1,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    color: Colors.text,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: Colors.whiteTunedBG,
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.muteGray,
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  DDSvgOpen: {
    transform: [{rotate: '180deg'}],
  },
  DDSvgClose: {
    alignItems: 'center',
  },
  requiredSymbol: {
    color: Colors.redMain,
    fontSize: 18,
    marginBottom: 5,
  },
  errorText: {
    color: Colors.redMain,
    marginTop: 4,
  },
});

export default ScreenDropDownSelector;
