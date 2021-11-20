import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function Home() {
  const navegacion = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navegacion.navigate("qs");
        }}
      >
        {" "}
        Quienes Somos
      </Text>
    </View>
  );
}
