import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../constants/Color';
import supplyShadowEffect from '../../../../utils/Shadow';
import { SocietyContributionRespInterface } from '../../../../schema/tabs/contribution/contributions.schema';
import HeroButton from '../../../../components/HeroButton';
import { ThemedText } from '../../../../components/ThemedText';
import CalendarIcon from '../../../../assets/svg/calendar.svg';
import ClockIcon from '../../../../assets/svg/clock.svg';
import LocationIcon from '../../../../assets/svg/location.svg';
import SEventContribution from './SEventContribution';
const SContributionViewModal = ({
    isVisible,
    modalVisible,
    data,
}: {
    isVisible: boolean;
    modalVisible: (value: boolean) => void;
    data: SocietyContributionRespInterface | undefined;
}) => {

    const [QRshow, setQRshow] = useState<boolean>(false)

    const handleOpenQR = () => {
        setQRshow(!QRshow)
    }

    return (
        <Modal
            transparent={true}
            animationType="slide"
            onRequestClose={() => modalVisible(false)}
            visible={isVisible}>
            <View style={styles.ModelContainer}>
                <HeroButton
                    btnText="Close"
                    varient="cancel"
                    onPress={() => modalVisible(false)}
                />
                <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}>
                    <ThemedText type="title" style={styles.TitleStyle}>
                        {data?.title}
                    </ThemedText>
                    <ThemedText type="semiBold">
                        Organized by: {data?.organizer}
                    </ThemedText>
                    <Image src={data?.image.secure_url} style={styles.image} />
                    <View style={styles.eventDetails}>
                        <View style={styles.flexDisplay}>
                            <CalendarIcon />
                            <ThemedText>
                                {new Date(data?.event_date as string).toDateString()}
                            </ThemedText>
                        </View>
                        <View style={styles.flexDisplay}>
                            <ClockIcon />
                            <ThemedText>{data?.event_time}</ThemedText>
                        </View>
                        <View style={styles.flexDisplay}>
                            <LocationIcon />
                            <ThemedText>{data?.event_location}</ThemedText>
                        </View>
                    </View>
                    <HeroButton btnText={QRshow ? "Close QR" : '+ Contribute'} varient='solid' style={{ alignSelf: "flex-start", paddingHorizontal: 52 }} onPress={handleOpenQR} />

                    {QRshow ? <SEventContribution data={JSON.stringify({
                        bankName: 'Nabil Bank',
                        accountName: 'Godar Thapa Donation',
                        accountNo: '01000011011010',
                    })} /> : <ThemedText style={styles.DescriptionStyle}>{data?.description}</ThemedText>}

                </ScrollView>
            </View>
        </Modal>
    );
};

export default SContributionViewModal;

const styles = StyleSheet.create({
    ModelContainer: {
        height: '90%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.background,

        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        ...supplyShadowEffect({
            X_off: 5,
            Y_off: 5,
            Radius: 5,
            Color: 'black',
            Opacity: 0.8,
            Elevation: 5,
        }),
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    scrollContainer: {
        width: '100%',
        paddingHorizontal: 10
    },
    TitleStyle: { fontSize: 22 },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 8,
        borderRadius: 8,
    },
    flexDisplay: {
        flexDirection: 'row',
        gap: 5,
    },
    eventDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    DescriptionStyle: {
        marginBottom: 40,
    },
});
