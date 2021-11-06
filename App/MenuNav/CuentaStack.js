import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cuenta from "../Vistas/Cuenta/Cuenta";

const Stack = createStackNavigator();
export default function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mi-cuenta"
        component={Cuenta}
        options={{ title: "Mi Cuenta" }}
      />
    </Stack.Navigator>
  );
}
