import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import CuentaStack from "./CuentaStack";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();
export default function Navegador() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case "home":
                iconName = "home";
                break;
              case "ciudades":
                iconName = "city";
                break;
              case "mi-cuenta":
                iconName = "account-box";
                break;
            }
            return (
              <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#d40000",
          tabBarInactiveTintColor: "gray",
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
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="mi-cuenta"
          component={CuentaStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
