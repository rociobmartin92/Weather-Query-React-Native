import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Vistas/Home/Home";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="main" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
}
