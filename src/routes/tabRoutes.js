import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Platform} from 'react-native';


import Home from '../screens/home';
import Search from '../screens/search';
import User from '../screens/user'


import iconHome from '../../assets/images/iconHome.png';
import iconSearch from '../../assets/images/iconSearch.png';
import iconUser from '../../assets/images/iconUser.png';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

  return (


      <Tab.Navigator  screenOptions={({route, focused}) => ({
        tabBarStyle: {  
          alignItems: 'center',
          justifyContent: 'center',
          height: Platform.OS === 'ios'? 90 : 60,
          borderTopWidth: 1,
          borderColor: '#ffffff'
        },
        headerShown: false,
      })}>
        
        <Tab.Screen name="Home" component={Home} options={{
            title: '', tabBarIcon: ({focused}) =>
            <Image style={focused ? styles.icons : null} source={iconHome}/>
            }} />

        <Tab.Screen name="Search" component={Search} options={{
            title: ' ', tabBarIcon: ({focused}) =>
            <Image style={focused ? styles.icons : null} source={iconSearch}/> }} />

        <Tab.Screen  name="User" component={User} options={{
           title: '', tabBarIcon: ({focused}) =>
           <Image style={focused ? styles.icons : null} source={iconUser}/>  }} />
        
        </Tab.Navigator>
 
  );
}

const styles = StyleSheet.create({
  icons: {
      backgroundColor: '#F5F3EE',
      borderRadius: 5,
      height: 25,
      width: 25
  }
})

