import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Welcome from '../screens/welcome';
import Booking from '../screens/booking';

import TabRoutes from './tabRoutes';
const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}  options={{
            title: '',
            headerShown: false,
            }} />
       
            <Stack.Screen name="Login" component={Login} options={{
           title: '',
           headerShown: false,
            }}/>

            <Stack.Screen name="TabRoutes" component={TabRoutes} options={{
           title: '',
           headerShown: false,
            }}/>

            <Stack.Screen name="Booking" component={Booking} options={{
           title: '',
           headerShown: false,
            }}/>

        </Stack.Navigator>
        </NavigationContainer>
      
    )
}