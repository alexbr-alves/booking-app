import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

import styles from './styles'
import user from '../../../assets/images/user.png'
import pack1 from '../../../assets/images/pack1.png'
import pack2 from '../../../assets/images/pack2.png'
import best1 from '../../../assets/images/best1.png'
import best2 from '../../../assets/images/best2.png'


export default function Home(){
    const [checkInVisivel, setcheckInVisivel] = useState(false);
    const [checkInDate, setCheckinDate] = useState(null);
    const [checkInDateTotal, setCheckinDateTotal] = useState(0);

    const [checkOutVisivel, setcheckOutVisivel] = useState(false);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkOutDateTotal, setCheckOutDateTotal] = useState(0);
   
    const [modalVisivel, setModalVisivel] = useState(false)
    const [person, setPerson] = useState(1);
    const [minimalDate, setMinimalDate] = useState(null)

    const navigation = useNavigation();


    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//check in
  const showCheckIn = () => {
    setcheckInVisivel(true);
  };

  const hideDatePicker = () => {
    setcheckInVisivel(false);
    setcheckOutVisivel(false)
  };


  const CheckInHandleConfirm = (date) => {
    setCheckinDate(`${days[date.getDay()]} - ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} ${months[date.getMonth()]}`)
    setCheckinDateTotal(date.getTime())
    setMinimalDate(date)
    hideDatePicker();
  };

//check out 

const showCheckout = () => {
    setcheckOutVisivel(true);
  };

  const CheckOutHandleConfirm = (date) => {
    setCheckOutDate(`${days[date.getDay()]} - ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} ${months[date.getMonth()]}`)
    setCheckOutDateTotal(date.getTime())
    hideDatePicker();
  };

  if(person < 1){
    setPerson(1)
  };
 
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header__texts}>
                    <Text style={styles.header__texts__hello}>Hello,</Text>
                    <Text style={styles.header__texts__check}>check the avaliability</Text>
                </View>
                <Image style={styles.header__image} source={user}/>
            </View>
            <View style={styles.search}>

                <TouchableOpacity style={styles.search__cards} onPress={showCheckIn}>
                    <Text style={styles.search__checkIn} >Check in</Text>
                    <Text style={styles.search__checkIn__date}>{checkInDate === null? null :
                    checkInDate}</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={checkInVisivel}
                    minimumDate={new Date()}
                    mode="date" 
                    onConfirm={CheckInHandleConfirm}
                    onCancel={hideDatePicker}
                    date={new Date()}
                    buttonTextColorIOS={'#317773'}
                    isDarkModeEnabled={false}
                    pickerStyleIOS={{
                        backgroundColor: '#317773'
                    }}
                    textColor="#FFFFFF"
                />
                <TouchableOpacity style={styles.search__cards} onPress={showCheckout}>
                    <Text style={styles.search__checkOut}>check out</Text>
                    <Text style={styles.search__checkOut__date}>{checkOutDate === null? null :
                    checkOutDate}</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={checkOutVisivel}
                    minimumDate={minimalDate}
                    mode="date"
                    onConfirm={CheckOutHandleConfirm}
                    onCancel={hideDatePicker}
                    date={new Date()}
                    buttonTextColorIOS={'#317773'}
                    isDarkModeEnabled={false}
                    pickerStyleIOS={{
                        backgroundColor: '#317773'
                    }}
                    textColor="#FFFFFF"
                />
                

                <TouchableOpacity style={styles.search__cards} onPress={() => {setModalVisivel(true)}}>
                    <Text style={styles.search__guest}>Guest</Text>
                    <Text style={styles.search__person}>{person} person</Text>
                </TouchableOpacity>

                <Modal transparent={true} visible={modalVisivel}>
                    <View style={styles.modal}>
                        <Text style={styles.modal__title}>Number of guests</Text>
                        <View style={styles.modal__count}>
                            <TouchableOpacity style={styles.modal__count__menos} onPress={() => setPerson(person - 1)}>
                                <Text style={styles.modal__count__TextButtom}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.modal__count__person}>{person}</Text>
                            <TouchableOpacity style={styles.modal__count__mais} onPress={() => setPerson(person + 1)}>
                                <Text style={styles.modal__count__TextButtom}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.modal__buttom} onPress={() => {setModalVisivel(false)}}>
                            <Text style={styles.modal__buttom__text}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                    
            </View>
                     <TouchableOpacity style={styles.search__buttom} onPress={() => {navigation.navigate('Search',{
                        person: person, days: ((Math.round(checkOutDateTotal - checkInDateTotal)/(1000 * 60 * 60 * 24)).toFixed(0))})}}>
                        <Text style={styles.search__buttom__text}>Search</Text>
                    </TouchableOpacity>


            <View style={styles.firstBoddy}>
                    <View style={styles.firstBoddy__title}>
                        <Text style={styles.firstBoddy__title1}>Some best packages</Text>
                        <TouchableOpacity>
                            <Text style={styles.firstBoddy__title2}>{`See All >`} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView  horizontal={true}>
                        <Image style={styles.firstBoddy__image} source={pack1}/>
                        <Image style={styles.firstBoddy__image} source={pack2}/>
                    </ScrollView>
            </View>

            <View style={styles.secondBoddy}>
                    <View style={styles.secondBoddy__title}>
                        <Text style={styles.secondBoddy__title1}>Some best hotels</Text>
                        <TouchableOpacity>
                            <Text style={styles.secondBoddy__title2}>{`See All >`} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView  horizontal={true}>
                        <Image style={styles.secondBoddy__image} source={best1}/>
                        <Image style={styles.secondBoddy__image} source={best2}/>
                    </ScrollView>
            </View>
        </View>
    )
}