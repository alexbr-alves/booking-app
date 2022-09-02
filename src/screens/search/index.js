import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


import styles from './styles'

import location from '../../../assets/images/location.png';
import user from '../../../assets/images/user.png';
import iconLoc from '../../../assets/images/iconLoc.png';
import star from '../../../assets/images/star.png'

import hoteis from '../../mocks/hoteis'

export default function Search(){
    const route = useRoute();
    const [nearby, setNearby] =useState(true);
    const [popular, Setpopular] = useState(false);
    const [all, setAll] = useState(false);
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
               <View style={styles.header}>
                <Image style={styles.header__icon__location} source={location}/>
                <View>
                    <Text style={styles.header__text__location}>Location</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.header__text__regional}>London</Text>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Image style={styles.header__icon__regional} source={iconLoc}/>
                    </TouchableOpacity>
                    </View>
                </View>
                <Image style={styles.header__icon__user} source={user}/>
            </View>

            <View style={styles.headerNavigation}>

                <TouchableOpacity onPress={() => {
                    {setNearby(true)}{Setpopular(false)}{setAll(false)}
                }}>
                    <Text style={nearby === true ? styles.headerNavigation__textActive : styles.headerNavigation__textInactive}>Nearby</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    {setNearby(false)}{Setpopular(true)}{setAll(false)}
                }}>
                    <Text style={popular === true ? styles.headerNavigation__textActive : styles.headerNavigation__textInactive}>Popular</Text>                  
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    {setNearby(false)}{Setpopular(false)}{setAll(true)}
                }}>
                    <Text style={all === true ? styles.headerNavigation__textActive : styles.headerNavigation__textInactive}>All</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.boddy}>
            <FlatList
            
            data={hoteis}
            keyExtractor={({id}, index)=> id}
            renderItem={({item}) => (
                <View style={styles.boddy__card}>

                    <TouchableOpacity onPress={() => {navigation.navigate('Booking',{
                        id: item.id, person: route.params.person, days: route.params.days
                    })}}>
                    <Image style={styles.boddy__card__image} source={item.image1}/>
                    </TouchableOpacity>

                    <View style={styles.boddy__card__areaPrice}>
                        <Text style={styles.boddy__card__price}>${item.day_price}/day</Text>
                    </View>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.boddy__card__name}>{item.name}</Text>
                            <Text style={styles.boddy__card__address}>{item.address}</Text>
                        </View>
                        <View style={styles.boddy__card__ratings}>
                            <Image style={styles.boddy__card__iconStar} source={star}/>
                            <Text style={styles.boddy__card__avaliacao}> {`${item.avaliacao} (${Math.floor(Math.random() * 30 + 10)} retings)`}</Text>
                        </View>
                   </View>

                </View>

            )}
            />
            </View>              
        </View>
    )
}