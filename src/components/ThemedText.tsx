import React from 'react';
import {Text, type TextProps, StyleSheet, Platform} from 'react-native';
import {Colors} from '../constants/Color';

export type ThemedTextProps = TextProps & {
  type?:
    | 'light'
    | 'default'
    | 'defaultItalic'
    | 'mediumBold'
    | 'title'
    | 'semiBold'
    | 'subtitle'
    | 'link';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = Colors.text;

  return (
    <Text
      style={[
        {color},
        type === 'light' ? styles.light : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'defaultItalic' ? styles.defaultItalic : undefined,
        type === 'mediumBold' ? styles.mediumBold : undefined,
        type === 'semiBold' ? styles.semiBold : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  light: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Light' : 'PoppinsLight',
  },
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
  defaultItalic: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Italic' : 'PoppinsItalic',
  },
  mediumBold: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Medium' : 'PoppinsMedium',
  },
  semiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins SemiBold' : 'PoppinsSemiBold',
  },
  title: {
    fontSize: 32,
    paddingVertical: 6,
    lineHeight: 32,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Bold' : 'PoppinsBold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Poppins semiBold' : 'PoppinssemiBold',
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: '#0a7ea4',
    fontFamily:
      Platform.OS === 'ios' ? 'Poppins MediumItalic' : 'PoppinsMediumItalic',
  },
});
