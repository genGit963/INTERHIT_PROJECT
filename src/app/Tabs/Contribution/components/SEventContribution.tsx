import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeroButton from '../../../../components/HeroButton'
import supplyShadowEffect from '../../../../utils/Shadow'
import BottomSpace from '../../../../components/BottomSpace'
import { ThemedText } from '../../../../components/ThemedText'
import GenerateQR from '../../../../utils/generateQR'
import { Colors } from '../../../../constants/Color'

const SEventContribution = ({ data }: { data: string }) => {
    const jsonData = JSON.parse(data);
    return (
        // <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
            {/* done model */}

            {/* QR View */}

            <View style={styles.QRView}>
                <GenerateQR data={data} />
            </View>

            {/* Contribution data Detail  */}
            <View style={styles.ContributionDetailView}>
                <ThemedText type="semiBold">
                    Bank Name: {jsonData.bankName}
                </ThemedText>
                <ThemedText type="semiBold">
                    Account Name: {jsonData.accountName}
                </ThemedText>
                <ThemedText type="semiBold">
                    Account No: {jsonData.accountNo}
                </ThemedText>
            </View>

            {/* Other detail Contribution */}
            <View style={styles.ContributionClaimView}>
                <ThemedText>Added Contribution ?? </ThemedText>
                <TouchableOpacity
                    onPress={() => console.log('Claim Contribution')}>
                    <ThemedText type="link">Claim Contribution</ThemedText>
                </TouchableOpacity>
            </View>
            <BottomSpace spaceHeight={'4%'} />
        </View>
        // </View>
    )
}

export default SEventContribution

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: Colors.screenBackground,
        alignItems: 'center',
        // paddingVertical: 10,
        // paddingHorizontal: 12,
        ...supplyShadowEffect({
            X_off: 0,
            Y_off: 0,
            Radius: 10,
            Color: '#000',
            Opacity: 0.3,
            Elevation: 4,
        }),
    },
    ScorllContainer: { width: '100%', paddingHorizontal: 10 },
    QRView: {
        marginVertical: 10,
    },
    ContributionDetailView: {
        margin: 'auto',
        alignItems: 'center',
    },
    ContributionClaimView: {
        marginTop: 10,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})