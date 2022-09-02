import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import styles from "./styles";

import hoteis from "../../mocks/hoteis";
import back from '../../../assets/images/back.png';
import star from '../../../assets/images/star.png';

import f1 from '../../../assets/images/f1.png';
import f2 from '../../../assets/images/f2.png';
import f3 from '../../../assets/images/f3.png';
import f4 from '../../../assets/images/f4.png';
import f5 from '../../../assets/images/f5.png';

export default function Booking({navigation: {goBack}}){
    const route = useRoute()
    let indice = 0

    for(let i = 0; i < hoteis.length; i++ ){
        if(route.params.id === hoteis[i].id){
            indice = i
        }
    }
   console.log(route.params.days)
    return(
        <View style={styles.container}>
            
        <MapView style={styles.map} 
        userInterfaceStyle={'light'} 
       region={{
        latitude:  hoteis[indice].latitude,
        longitude: hoteis[indice].longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
       }}
       >
      
        <Marker coordinate={{
             latitude:  hoteis[indice].latitude,
             longitude: hoteis[indice].longitude,
             latitudeDelta: 0.00922,
             longitudeDelta: 0.00421,
        }} 
       image={require('../../../assets/images/pin.png')}
       title={hoteis[indice].name}
        />
        </MapView>
        <TouchableOpacity style={{position: 'absolute'}} onPress={() =>{goBack()}}>
        <Image style={styles.iconBack} source={back}/>
        </TouchableOpacity>
        <View style={styles.boddy}>
            <Text style={styles.boddy__name}>{hoteis[indice].name}</Text>
            <Text style={styles.boddy__address}>{hoteis[indice].address}, {hoteis[indice].city}</Text>
            <View style={styles.boddy__imagens}>
                <Image style={styles.boddy__image1} source={hoteis[indice].image1}/>
                <View>
                    <Image style={styles.boddy__image2} source={hoteis[indice].image2}/>
                    <Image style={styles.boddy__image3} source={hoteis[indice].image3}/>
                </View>
            </View>
            <View style={styles.boddy__card__ratings}>
                <Image style={styles.boddy__card__iconStar} source={star}/>
                <Text style={styles.boddy__card__avaliacao}> {`${hoteis[indice].avaliacao} (${Math.floor(Math.random() * 30 + 10)} retings)`}</Text>
            </View>
            <View>
                <Text style={styles.boddy__overview__title}>OVERVIEW</Text>
                <Text style={styles.boddy__overview}>{hoteis[indice].overview}</Text>
            </View>
            <Text style={styles.boddy__features__title}>FEATURES</Text>
            <View style={styles.boddy__features__row}>
            <Image style={styles.boddy__features__image} source={hoteis[indice].features.wifi === true? f1 : null}/>
            <Image style={styles.boddy__features__image} source={hoteis[indice].features.drink === true? f2 : null}/>
            <Image style={styles.boddy__features__image} source={hoteis[indice].features.gym === true? f3 : null}/>
            <Image style={styles.boddy__features__image} source={hoteis[indice].features.pool === true? f4 : null}/>
            <Image style={styles.boddy__features__image} source={hoteis[indice].features.restaurant === true? f5 : null}/>
            </View>
            <View style={styles.boddy__pryce}>
                <Text style={styles.boddy__price__text}>${hoteis[indice].day_price * route.params.days * route.params.person} TOTAL</Text>
                <TouchableOpacity style={styles.buttom}>
                    <Text style={styles.buttom__text}>BOOK NOW</Text>
                </TouchableOpacity>
            </View> 
        </View>
        
        </View>
  
      
    );
  }
  
  