import { StyleSheet, Platform } from "react-native";


const c = 1.28
export default StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: 'row',
        marginTop: 53 * c,
        marginLeft: 29 * c
    },
    header__icon__location: {
        width: 22 * c,
        height: 20 * c,
        alignSelf: "center"
    },
    header__text__location: {
        fontFamily: 'Poppins_400Regular',
        marginLeft: 8 * c,
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#A9A9A9'
    },
    header__text__regional: {
        fontFamily: 'Poppins_600SemiBold',
        marginLeft: 8 * c,
        fontSize: 14 * c,
        lineHeight: 21 * c
    },
    header__icon__regional: {
        alignSelf: 'center',
        marginLeft: 5,
        width: 10 * c,
        height: 10 * c
    },
    header__icon__user: {
        marginLeft: 130
    },
    headerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 52 * c,
        marginTop: 50 * c
    },
    headerNavigation__textActive: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16 * c,
        lineHeight: 24 * c,
        color: '#000000'
    },
    headerNavigation__textInactive: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16 * c,
        lineHeight: 24 * c,
        color: '#a9a9a9'
    },
    boddy: {
        marginHorizontal: 16,
        marginTop: 16,
        paddingBottom: 425
    },
    boddy__card: {
        marginTop: 10,
       
    },
    boddy__card__image: {
        height: 139 * c,
        width: Platform.OS === 'ios'? 299 * c : 285 * c,
        borderRadius: 15,  
    },
    boddy__card__areaPrice:{
        position: 'absolute',
        backgroundColor: '#317773',
        height: 24 * c,
        width: 60 * c,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 103 * c,
        borderBottomLeftRadius: 10 * c,
        borderTopLeftRadius: 10 * c,
        opacity: 0.9
    },
    boddy__card__price: {
        position: 'absolute',
        fontFamily: 'Poppins_400Regular',
        fontSize: 8 * c,
        lineHeight: 12 * c,
        color: '#F5F3EE'
    },
    boddy__card__name: {
        marginLeft: 6 * c,
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * c,
        lineHeight: 21 * c,
        color: '#000000',
        marginTop: 11 * c
    },
    boddy__card__address: {
        marginLeft: 6 * c,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#A9A9A9'
    },
    boddy__card__ratings: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 6, 
        marginTop: 11 * c
    },
    boddy__card__iconStar: {
        height: 12 * c,
        width: 12 * c,
        marginHorizontal: 2
    },
    boddy__card__avaliacao: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#A9A9A9',   
    }
})