import { StyleSheet, Platform} from "react-native";

// correcao é uma variavel para corrigir o tamanho da tela do projeto figma com a tela desse projeto
const correcao = 1.28

export default StyleSheet.create({
    container: {

    },
    background: {
        width: '100%',
        height: '100%',
    },
    title: {
        marginTop: Platform.OS === 'android'? (261 * correcao) : (281 * correcao),
        alignSelf: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20 * correcao,
        lineHeight: 30 * correcao,
        color: '#000000'
    },
    input__username: {
        marginTop: 62 * correcao,
        marginHorizontal: 62 * correcao,
        borderBottomWidth: 1 * correcao,
        borderColor: '#317773',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12 * correcao,
        lineHeight: 18 * correcao,
        paddingLeft: 5 * correcao
    },
    input__password: {
        marginTop: 21 * correcao,
        marginHorizontal: 62 * correcao,
        borderBottomWidth: 1,
        borderColor: '#317773',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12 * correcao,
        lineHeight: 18 * correcao,
        paddingLeft: 5 * correcao
    },
    buttom: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 57 * correcao,
        marginTop: 21 * correcao,
        height: 35 * correcao,
        backgroundColor: '#317773',
        borderRadius: 15 * correcao
    },
    buttom__text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16 * correcao,
        lineHeight: 24 * correcao,
        color: '#F5F3EE'
    },
    text__or: {
        alignSelf: 'center',
        marginTop: 10 * correcao,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12 * correcao,
        lineHeight: 18 * correcao,
        color: '#000000'
    },
    conexions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10 * correcao
    },
    conexions__icons: {
        width: 42 * correcao,
        height: 37.5 * correcao
    }
})