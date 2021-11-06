import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { ImageBackground } from "react-native";

export default function HomeStack() {
  return (
    <View style={estilos.container}>
      <ImageBackground
        style={estilos.backgroundImage}
        source={require("../../assets/home.jpg")}
      >
        <View style={estilos.logoContainer}>
          <Text>Newzzz</Text>
          <Text>Get your doze of daily news!</Text>
        </View>
      </ImageBackground>

      <Text> Home </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  logoContainer: { alignItems: "center" },
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
  },
});
