import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ciudades from "../Vistas/Ciudades/Ciudades";

const Stack = createStackNavigator();
export default function CiudadesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ciudades"
        component={Ciudades}
        options={{ title: "Lista de Cuidades" }}
      />
    </Stack.Navigator>
  );
}
