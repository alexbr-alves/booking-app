import { StyleSheet, Platform, Dimensions } from "react-native";
const c = 1.28
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#ffffff',
      height: '100%'
    },
    map: {
      width:'100%',
      height: 240
    },
    iconBack: {
        position: 'absolute',
        marginTop: 38 * c,
        marginLeft: 12 * c,
        height: 20 * c,
        width: 20 * c,
    },
    boddy: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        marginTop: 167 * c,
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    boddy__name: {
        marginTop: 22 * c,
        marginLeft: 30 * c,
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * c,
        lineHeight: 21 * c,
        color: '#000000'
    },
    boddy__address: {
        marginLeft: 30 * c,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#A9A9A9'
    },
    boddy__imagens: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 20
    },
    boddy__image1: {
        width: '45%',
        height: 194 ,
        borderRadius: 15
    },
    boddy__image2: {
        height: 91,
        width: Platform.OS === 'android'? 185 : 195,
        marginLeft: 13,
        borderRadius: 15
    },
    boddy__image3: {
        height: 91,
        width: Platform.OS === 'android'? 185 : 195,
        marginLeft: 13,
        borderRadius: 15,
        marginTop: 12
    },
    boddy__card__ratings: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 17, 
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
    },
    boddy__overview__title: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * c,
        lineHeight: 21 * c,
        color: '#000000',
        marginLeft: 24 * c
    },
    boddy__overview: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 8 * c,
        lineHeight: 12 * c,
        color: '#A9A9A9',
        marginLeft: 24 * c
    },
    boddy__features__title: {
        marginTop: 20 * c,
        marginLeft: 24 * c,
        fontFamily: 'Poppins_500Medium',
        fontSize: 14 * c,
        lineHeight: 21 * c,
        color: '#000000',
        marginLeft: 24 * c
    },
    boddy__features__row: {
        flexDirection: 'row',
        marginLeft: 20 * c,
        marginTop: 10 * c
    },
    boddy__features__image: {
        marginHorizontal: 2
    },
    boddy__pryce: {
        height: 60,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: "center",
       marginLeft: 25* c,
       marginTop: 20
    },
    boddy__price__text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16 * c,
        lineHeight: 24 * c,
        color: '#000000',
    },
    buttom: {
        backgroundColor: '#317773',
        height: 32 * c,
        width: 77 * c,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttom__text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#F5F3EE',
       
    },
    boddy__pryce__descriptions: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10 * c,
        lineHeight: 15 * c,
        color: '#A9A9A9',
        marginLeft: 25
    }
    
    



  });