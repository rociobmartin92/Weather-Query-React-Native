import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home.screen';
import QuienesSomos from '../screens/Home/QuienesSomos';
import Ciudades from '../screens/Ciudades/Ciudades.screen';
import colors from '../../assets/colors';

const Stack = createNativeStackNavigator();

export default function Navegador() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.GENERAL },
          headerTintColor: colors.LIGHTGREY,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 18 },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Weather Query App' }}
        />
        <Stack.Screen
          name="qs"
          component={QuienesSomos}
          options={{ title: 'Sobre Nosotros' }}
        />
        <Stack.Screen
          name="listaCiudades"
          component={Ciudades}
          options={{ title: 'Mis Ciudades' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
