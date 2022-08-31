import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        //flex: 1
    },
    background: {
        width: '100%',
        height: '100%',
    },
    iconNext: {
        marginTop: Platform.OS === 'android'? 600 : 680,
        alignSelf: 'center',
    }
})