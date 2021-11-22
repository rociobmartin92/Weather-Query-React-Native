import React from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import wea from "../../../assets/wea.png";

export default function Home() {
  const navegacion = useNavigation();
  const [cerrar, setCerrar] = useState(true);
  const [lluvia] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(lluvia, {
      toValue: 0,
      duration: 7000,
      useNativeDriver: false,
    }).start(() => setCerrar(false));
  }, []);

  if (cerrar) {
    return (
      <View style={estilos.contenedor}>
        <Animated.Image
          style={[estilos.lluvia, { opacity: lluvia }]}
          source={{
            uri: "https://www.okchicas.com/wp-content/uploads/2019/05/Wallpapers-de-naturaleza-13.jpg",
          }}
        />
      </View>
    );
  } else
    return (
      <View style={estilos.contenedor}>
        <Image style={estilos.imagen} source={wea} />

        <View style={estilos.cntxt}>
          <Text style={estilos.text}>
            Consulta rapidamente el clima de cualquier lugar de Argentina en
            tiempo real y escoge la mejor ciudad para vender tus productos hoy
          </Text>

          <Text style={estilos.text2}>
            Weather Query App te permite registrar tu usuario y guardar las
            ciudades que más habitúas
          </Text>
          <Text
            style={estilos.qs}
            onPress={() => {
              navegacion.navigate("qs");
            }}
          >
            Sobre Nosotros
          </Text>
        </View>
      </View>
    );
}

const estilos = StyleSheet.create({
  imagen: {
    width: 200,
    height: 180,
    marginTop: 10,
  },
  contenedor: { alignItems: "center" },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 40,
    marginTop: 10,
    fontFamily: "serif",
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 40,
    marginTop: 10,
    fontFamily: "serif",
  },
  cntxt: { alignItems: "center" },
  qs: {
    color: "#CC0000",
    marginTop: 125,
    marginLeft: 225,
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    marginBottom: 8,
  },
  lluvia: { width: 412, height: 820 },
  contenedor: {
    flex: 1,
    alignItems: "center",
  },
});
