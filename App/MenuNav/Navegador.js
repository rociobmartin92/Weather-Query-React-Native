import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import CuentaStack from "./CuentaStack";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function Navegador() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          inactiveTintColor: "grey",
          activeTintColor: "#800000",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Home" }}
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

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "ciudades":
      iconName = "format-list-bulleted";
      break;
    case "micuenta":
      iconName = "account";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
