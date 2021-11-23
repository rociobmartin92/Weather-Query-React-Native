import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Image } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

import colors from "../../../assets/colors"


export default function InfoCard(props){
  const { city, eliminarCiudad } = props;
  const navigation = useNavigation();

  const kelvin = 273.15;

  return (

    <View style={styles.card}>
      <View style={styles.card_info}>
        <Text style={styles.temperatura}>{ parseInt(city.main.temp-kelvin) }
          <Text style={styles.grado}>&#x2103;</Text>
          <Image
            style={{width: 66, height: 58}}
            source={{ uri: `http://openweathermap.org/img/w/${city.weather[0].icon}.png` }}
          />
        </Text>
        <Text style={styles.card_info_desc}>{city.weather[0].description}</Text>
        <View style={styles.card_info_temp}>
          <Text>Mín. { parseInt(city.main.temp_min-kelvin) } <Text>&#x2103;</Text></Text>
          <Text>Máx. { parseInt(city.main.temp_max-kelvin) } <Text>&#x2103;</Text></Text>
          <Text>ST. { parseInt(city.main.feels_like-kelvin) } <Text>&#x2103;</Text></Text>
        </View>
      </View>
      <Text style={styles.card_info_location}>Ubicación: <Text>{city.name}</Text></Text>
      <View style={styles.card_info_extra}>
        <Text>
          <Text>H: {city.main.humidity}% </Text>
          <Text>PA: {city.main.pressure}hPA </Text>
          <Text>V: {parseInt(city.wind.speed*3.6)}km/h </Text>
        </Text>
      </View>
      <Button
        icon={{
          name: 'delete',
          color: colors.GENERAL,
          type: 'material-community',
        }}
        buttonStyle={styles.btnDelete}
        containerStyle={styles.containerBtnDelete}
        titleStyle={styles.titleBtnInfo}
        onPress={() => eliminarCiudad(city.key)}
      />
      <Button
        icon={{
          name: 'information',
          color: colors.GENERAL,
          type: 'material-community',
        }}
        buttonStyle={styles.btnInfo}
        containerStyle={styles.containerBtnInfo}
        title={'Más info'}
        titleStyle={styles.titleBtnInfo}
        onPress={() => navigation.navigate('miCiudad')}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,
    backgroundColor: colors.LIGHTGREY,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  card_info: {
    position: "absolute",
    top: 15,
    left: 50,
  },
  card_info_desc: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  card_info_temp: {
    position: "absolute",
    top: 20,
    left: 135
  },
  temperatura: {
    fontSize: 40,
  },
  card_info_location: {
    textTransform: "uppercase",
    paddingLeft: 10,
  },
  card_info_extra: {
    position: "absolute",
    bottom: 15,
    left: 18,
  },
  btnDelete: {
    backgroundColor: colors.LIGHTGREY,
    width: '100%',
    height: '100%',
  },
  containerBtnDelete: {
    marginBottom: 15,
    position: 'absolute',
    top: 5,
    right: 5,
    width: 50,
    height: 50,
    backgroundColor: colors.GENERAL,
  },
  titleBtnInfo: {
    color: colors.GENERAL,
  },
  btnInfo: { 
    backgroundColor: colors.LIGHTGREY, 
    width: '100%', 
    height: '100%' 
  },
  containerBtnInfo: {
    marginBottom: 0,
    width: 120,
    height: 50,
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  grado: {
    fontSize: 20,
    color: "grey"
  }
});