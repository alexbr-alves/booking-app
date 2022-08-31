import React from "react";
import { View, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from './styles'

import welcome from '../../../assets/images/welcome.png';
import iconNext from '../../../assets/images/iconNext.png';
import { useNavigation } from "@react-navigation/native";
export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={welcome}>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Image style={styles.iconNext} source={iconNext} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}