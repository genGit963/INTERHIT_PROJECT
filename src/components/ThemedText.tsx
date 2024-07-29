import React from 'react';
import {Text, type TextProps, StyleSheet, Platform} from 'react-native';
import {Colors} from '../constants/Color';

export type ThemedTextProps = TextProps & {
  type?:
    | 'defaultLight'
    | 'default'
    | 'defaultItalic'
    | 'title'
    | 'defaultSemiBold'
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
        type === 'defaultLight' ? styles.defaultLight : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'defaultItalic' ? styles.defaultItalic : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  defaultLight: {
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
  defaultSemiBold: {
    fontSize: 14,
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
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: '#0a7ea4',
  },
});
