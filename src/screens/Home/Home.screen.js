import React from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";

export default function Home() {
  const navegacion = useNavigation();
  const [cerrar, setCerrar] = useState(true);
  const [lluvia] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(lluvia, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false,
    }).start(() => setCerrar(false));
  }, []);

  if (cerrar) {
    return (
      <View>
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
        <Text style={estilos.tit}> Weather Query App</Text>

        <Image
          style={estilos.imagen}
          source={{
            uri: "http://getdrawings.com/cliparts/weather-clipart-for-kids-19.jpg",
          }}
        />

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
  imagen: { width: 210, height: 130, marginBottom: 60 },
  contenedor: { alignItems: "center" },
  tit: { fontSize: 32, margin: 20, marginTop: 55 },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 40,
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
    color: "#B8860B",
    marginTop: 160,
    marginLeft: 210,
    fontFamily: "serif",
    fontSize: 15,
  },

  lluvia: { width: 412, height: 773 },
});
