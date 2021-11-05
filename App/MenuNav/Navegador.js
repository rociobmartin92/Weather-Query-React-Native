import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import CuentaStack from "./CuentaStack";

export default function Navegador() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ ittle: "Home" }}
        />
        <Tab.Screen
          name="ciudades"
          component={CiudadesStack}
          options={{ title: "Lista" }}
        />
        <Tab.Screen
          name="micuenta"
          component={CuentaStack}
          options={{ title: "Mi Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
