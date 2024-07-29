import React from 'react';
import {Text, type TextProps, StyleSheet, Platform} from 'react-native';
import {Colors} from '../constants/Color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'defaultLight'
    | 'default'
    | 'defaultItalic'
    | 'title'
    | 'defaultMedium'
    | 'subtitle'
    | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
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
        type === 'defaultMedium' ? styles.defaultMedium : undefined,
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
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Light' : 'PoppinsLight',
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Regular' : 'PoppinsRegular',
  },
  defaultItalic: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Italic' : 'PoppinsItalic',
  },
  defaultMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins Medium' : 'PoppinsMedium',
  },
  title: {
    fontSize: 32,
    paddingVertical: 6,
    lineHeight: 32,
    fontFamily: Platform.OS === 'ios' ? 'Poppins SemiBold' : 'PoppinsSemiBold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
