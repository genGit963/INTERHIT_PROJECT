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
    | 'link'
    | 'muted';
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
        type === 'muted' ? styles.muted : undefined,
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
    fontFamily: Platform.OS === 'ios' ? 'Poppins Medium' : 'PoppinsMedium',
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
  muted: {
    lineHeight: 30,
    fontSize: 14,
    color: Colors.muteText,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
});
