import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ciudades from '../screens/Ciudades/Ciudades.screen';
import MiCiudad from '../screens/Ciudades/MiCiudad/MiCiudad.screen';
import colors from '../../assets/colors';

const Stack = createStackNavigator();
export default function CiudadesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.GENERAL },
        headerTintColor: colors.LIGHTGREY,
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 18 },
      }}
    >
      <Stack.Screen
        name="ciudades"
        component={Ciudades}
        options={{ title: 'Mis Ciudades' }}
      />

      <Stack.Screen
        name="miCiudad"
        component={MiCiudad}
        options={{ title: 'Mi ciudad' }}
      />
    </Stack.Navigator>
  );
}
