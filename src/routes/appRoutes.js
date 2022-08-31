import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Home from '../screens/home';
import Welcome from '../screens/welcome'
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

            <Stack.Screen name="Home" component={Home} options={{
           title: '',
           headerShown: false,
            }}/>

        </Stack.Navigator>
        </NavigationContainer>
      
    )
}