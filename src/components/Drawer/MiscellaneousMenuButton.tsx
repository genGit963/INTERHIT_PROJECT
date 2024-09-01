import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Colors } from '../../constants/Color';

// ---------------------- Drawer Bar Button ----------------------
type MiscellaneousMenuProps = {
    Icon: React.FC<SvgProps>;
    Title: string;
    endPoint: string;
    callbackModalVisible: (value: boolean) => void;
};

const MiscellaneousMenu: React.FC<MiscellaneousMenuProps> = ({
    Icon,
    Title,
    endPoint,
    callbackModalVisible,
}) => {
    // on tapping bar button
    const handleTapping = (ep: string) => {
        Linking.openURL(`https://thadaraiadhikari.com/${ep}`).catch((err) => console.log("Unable to open the url"))
        callbackModalVisible(false);
    };
    return (
        <TouchableOpacity style={styles.DrawerButton} onPress={() => handleTapping(endPoint)}>
            {/* Icon */}
            <Icon height={22} width={22} style={styles.BarBtnIcon} />

            {/* Title */}
            <ThemedText type="mediumBold" style={styles.Title}>
                {Title}
            </ThemedText>
        </TouchableOpacity>
    );
};

export const styles = StyleSheet.create({
    DrawerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 16,
        alignItems: 'center',
        marginVertical: 5,
        // borderWidth: 1,
    },
    BarBtnIcon: {},
    Title: {
        fontSize: 16,
        color: Colors.muteText,
    },
});

export default MiscellaneousMenu;
