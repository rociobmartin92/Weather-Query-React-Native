import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cuenta from '../screens/Cuenta/Cuenta.screen';
import colors from '../../assets/colors';

const Stack = createStackNavigator();
export default function CuentaStack() {
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
        name="mi-cuenta"
        component={Cuenta}
        options={{ title: 'Mi Cuenta' }}
      />
    </Stack.Navigator>
  );
}
