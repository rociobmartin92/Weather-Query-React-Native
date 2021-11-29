import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { FAB } from 'react-native-elements';

import colors from '../../../assets/colors';

//Función que renderiza la screen del Home
export default function Home() {
  const navegacion = useNavigation();
  const [cerrar, setCerrar] = useState(true);
  const [lluvia] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(lluvia, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setCerrar(false));
  }, []);

  if (cerrar) {
    return (
      <View style={estilos.contenedor}>
        <Animated.Image
          style={[estilos.lluvia, { opacity: lluvia }]}
          source={require('../../../assets/home-wallpaper.webp')}
        />
      </View>
    );
  } else
    return (
      <View style={estilos.contenedor}>
        <Image
          style={estilos.logo}
          source={require('../../../assets/logo.png')}
        />

        <Text style={estilos.text}>
          Consultá rápidamente el clima de cualquier lugar de Argentina en
          tiempo real y escogé la mejor ciudad para vender tus productos hoy
        </Text>

        <Text style={estilos.text}>
          Weather Query App te permite guardar las ciudades que más habitúas
        </Text>

        <FAB
          onPress={() => navegacion.navigate('listaCiudades')}
          title="Mis Ciudades"
          icon={{ name: 'apartment', color: 'white' }}
          color={colors.GENERAL}
          style={estilos.fab}
        />

        <Text
          style={estilos.qs}
          onPress={() => {
            navegacion.navigate('qs');
          }}
        >
          Quienes Somos
        </Text>
      </View>
    );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 180,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 40,
    marginTop: 10,
    fontFamily: 'serif',
  },
  qs: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
  },
  lluvia: {
    width: 412,
    height: 820,
  },
  fab: {
    marginTop: 40,
  },
});
