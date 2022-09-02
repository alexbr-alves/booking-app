import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {SplashScreen} from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


import Home from './src/screens/home';
import AppRoutes from './src/routes/appRoutes';

import Search from './src/screens/search';
export default function App() {

  let [fontsLoaded, error] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
      })
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();    }
      }, [fontsLoaded])
    
        if(!fontsLoaded){
          return null
        }

  return (
    <>
    <AppRoutes/>
    </>
  );
}

