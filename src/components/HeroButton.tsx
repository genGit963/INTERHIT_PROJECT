import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../constants/Color';
import {ThemedText} from './ThemedText';

interface HeroButtonProps extends TouchableOpacityProps {
  btnText: string;
  varient?: 'outlined' | 'solid' | 'ghost' | 'cancel' | 'done' | 'warning';
}

const HeroButton: React.FC<HeroButtonProps> = ({
  style,
  btnText,
  varient = 'solid',
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        varient === 'solid' ? styles.SolidButtonView : undefined,
        varient === 'outlined' ? styles.OutlinedButtonView : undefined,
        varient === 'ghost' ? styles.GhostButtonView : undefined,
        varient === 'warning' ? styles.WarningButtonView : undefined,
        varient === 'cancel' ? styles.CancelButtonView : undefined,
        varient === 'done' ? styles.DoneButtonView : undefined,
        style,
      ]}
      {...rest}>
      <ThemedText
        type="mediumBold"
        style={[
          varient === 'solid' ? styles.SolidButtonText : undefined,
          varient === 'outlined' ? styles.OutlinedButtonText : undefined,
          varient === 'ghost' ? styles.GhostButtonText : undefined,
          varient === 'warning' ? styles.WarningButtonText : undefined,
          varient === 'cancel' ? styles.CancelButtonText : undefined,
          varient === 'done' ? styles.DoneButtonText : undefined,
        ]}>
        {btnText}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SolidButtonView: {
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 10,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SolidButtonText: {
    fontSize: 18,
    color: Colors.misText,
    textAlign: 'center',
  },
  OutlinedButtonView: {
    borderWidth: 0.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.whiteTunedBG,
    height: 40,
    borderRadius: 10,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OutlinedButtonText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
  GhostButtonView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GhostButtonText: {
    fontSize: 18,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  WarningButtonView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.redMain,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  WarningButtonText: {
    fontSize: 18,
    color: Colors.whiteTunedBG,
    textAlign: 'center',
  },
  //   {width: '100%', alignItems: 'flex-end'},
  CancelButtonView: {
    height: 40,
    borderRadius: 10,
    paddingRight: 4,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'flex-end',
  },
  CancelButtonText: {
    fontSize: 18,
    color: Colors.redMain,
    textAlign: 'center',
    paddingRight: 4,
  },
  DoneButtonView: {
    // backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 10,
    paddingRight: 4,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'flex-end',
  },
  DoneButtonText: {
    fontSize: 18,
    paddingRight: 4,
    color: Colors.primary,
    textAlign: 'center',
  },
});

export default HeroButton;
