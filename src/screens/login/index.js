import React from "react";
import { View, Image, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
 import styles from './styles'

 import login from '../../../assets/images/login.png';
 import iconFacebook from '../../../assets/images/iconFacebook.png';
 import iconGoogle from '../../../assets/images/iconGoogle.png';


 export default function Login(){
    const navigation = useNavigation()
    return(
        <View>
           <ImageBackground style={styles.background} source={login} >
            <Text style={styles.title}>bockme.co</Text>
            <TextInput
             style={styles.input__username}
            placeholder="Username"
            placeholderTextColor={'#000000'}
            autoCapitalize="none"
            />

            <TextInput
            style={styles.input__password}
            placeholder="Password"
            placeholderTextColor={'#000000'}
            autoCapitalize="none"
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate('TabRoutes')}}>
                <Text style={styles.buttom__text}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text__or}>or</Text>

            <View style={styles.conexions}>
                <TouchableOpacity onPress={() => {navigation.navigate('TabRoutes')}}>
                    <Image style={styles.conexions__icons} source={iconFacebook}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('TabRoutes')}}>
                    <Image style={styles.conexions__icons} source={iconGoogle}/>
                </TouchableOpacity>
            </View>


           </ImageBackground>

        </View>
    )
 }