import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import CiudadesStack from "./CiudadesStack";
import CuentaStack from "./CuentaStack";
import colors from "../../assets/colors";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();
export default function Navegador() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case "home":
                iconName = "home";
                break;
              case "listaCiudades":
                iconName = "city";
                break;
              case "miCuenta":
                iconName = "account-circle";
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
          tabBarActiveTintColor: colors.GENERAL,
          tabBarInactiveTintColor: colors.LIGHTGREY,
          headerShown: false,
          background: colors.GENERAL,
          tabBarActiveBackgroundColor: colors.LIGHTGREY,
          tabBarInactiveBackgroundColor: colors.GENERAL,
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={({ title: "Home" })}
        />
        <Tab.Screen
          name="listaCiudades"
          component={CiudadesStack}
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="miCuenta"
          component={CuentaStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
