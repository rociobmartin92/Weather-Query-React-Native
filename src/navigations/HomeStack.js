import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home.screen';
import colors from '../../assets/colors';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.GENERAL },
        headerTintColor: colors.LIGHTGREY,
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 18 },
      }}
    >
      <Stack.Screen name="main" component={Home} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}
