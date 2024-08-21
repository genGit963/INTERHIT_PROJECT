import React from 'react';
import { View, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { ThemedText } from '../../../../components/ThemedText';
import { Colors } from '../../../../constants/Color';

interface TabBarIconProps extends SvgProps {
    size?: number;
    color?: string;
    style?: ViewStyle;
    label?: string;
    focused?: boolean,
    labelStyle?: TextStyle;
    IconComponent: React.FC<SvgProps>
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ size = 24, color, focused, style, label, labelStyle, IconComponent }) => {

    return (
        <View style={styles.container}>
            <View style={style}>
                <IconComponent width={size} height={size} color={color} />
            </View>
            {label !== "Genealogy" ? <ThemedText type='mediumBold' style={[styles.label, { color }]}>{label}</ThemedText> : <ThemedText type='mediumBold' style={[styles.GLabel, { color }]}>{label}</ThemedText>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginTop: 4, // Space between the icon and label
        fontSize: 13,
        textAlign: "center"
    },
    GLabel: {
        position: "absolute",
        top: "5%",
        fontSize: 13,
        textAlign: "center"
    }

});

export default TabBarIcon;
