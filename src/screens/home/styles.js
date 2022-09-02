import { StyleSheet } from "react-native";

const correcao = 1.28

export default StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 56 * correcao,
        marginLeft: 24 * correcao,
        marginRight: 46 * correcao
    },
    header__texts__hello: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20 * correcao,
        lineHeight: 30 * correcao,
        color: '#000000'
    },
    header__texts__check: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14 * correcao,
        lineHeight: 21 * correcao,
        color: '#A9A9A9'
    },
    header__image: {
        height: 50 * correcao,
        width: 50 * correcao
    },
    search: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 14 * correcao,
        marginHorizontal: 5
    },
    search__cards: {
        width: 90 * correcao,
        height: 67 * correcao, 
        backgroundColor: '#F5F3EE',
        marginHorizontal: 5,
        borderRadius: 10 * correcao
    },
    search__checkIn:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#A9A9A9',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao
    },
    search__checkIn__date: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#317773',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao
    },
    search__checkOut: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#A9A9A9',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao
    },
    search__checkOut__date:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#317773',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao
    },
    search__guest: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#A9A9A9',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao,
    },
    search__person:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * correcao,
        lineHeight: 15 * correcao,
        color: '#317773',
        marginLeft: 9 * correcao,
        marginTop: 12 * correcao
    },


    modal: {
        height: '30%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 198 * correcao,
        borderWidth: 2,
        borderColor: '#317773',
        backgroundColor: '#ffffff',
       
    },
    modal__title:{
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20
    },
    modal__count:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },
    modal__count__menos:{
        marginHorizontal: 10,
        backgroundColor: '#317773',
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20
    },
    modal__count__mais: {
        marginHorizontal: 10,
        backgroundColor: '#317773',
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20
    },
    modal__count__person: {
        fontSize: 30,
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    modal__count__TextButtom: {
        fontSize: 30,
        color: '#ffffff'
    },
    modal__buttom: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#317773',
        marginHorizontal: 100,
        borderRadius: 10,
        height: 25
    },
    modal__buttom__text: {
        color: '#ffffff',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15 
    },
    search__buttom: {
        height: 34 * correcao,
        marginHorizontal: 23 * correcao,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14 * correcao,
        backgroundColor: '#317773',
        borderRadius: 15 * correcao,
    },
    search__buttom__text: {
        fontFamily: 'Poppins_400Regular',
        color: '#F5F3EE',
        fontSize: 14 * correcao,
        lineHeight: 21 * correcao
    },
    firstBoddy__title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 26 * correcao,
        marginHorizontal: 23 * correcao
    },
    firstBoddy__title1: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16 * correcao,
        lineHeight: 24 * correcao,
        color: '#000000'
    },
    firstBoddy__title2: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * correcao,
        lineHeight: 21 * correcao,
        color: '#A9A9A9'
    },
    firstBoddy__image:{
        width: 174 * correcao,
        height: 141 * correcao, 
        marginLeft: 15
    },

    secondBoddy__title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 26 * correcao,
        marginHorizontal: 23 * correcao
    },
    secondBoddy__title1: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16 * correcao,
        lineHeight: 24 * correcao,
        color: '#000000'
    },
    secondBoddy__title2: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * correcao,
        lineHeight: 21 * correcao,
        color: '#A9A9A9'
    },
    secondBoddy__image:{
        width: 174 * correcao,
        height: 141 * correcao, 
        marginLeft: 15
    }
})