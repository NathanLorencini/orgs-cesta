import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from '../orgs-cesta/src/telas/Cesta/index';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic} from '@expo-google-fonts/montserrat';

import mock from '../orgs-cesta/src/mocks/cesta'


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView >
      <StatusBar/>
     <Cesta {...mock}/>
    </SafeAreaView>
  );
}
