import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Colors } from '../constants/Color'

const Loader = () => {

    return (
        <SafeAreaView style={styles.loaderScreen}>
            <LottieView source={require("../assets/lottie/loading.json")} autoPlay loop style={styles.loader} />
        </SafeAreaView>
    )
}

export default Loader

const styles = StyleSheet.create({
    loaderScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background
    },
    loader: {
        width: 60,
        height: 60,
        borderRadius: 50,
    }
})