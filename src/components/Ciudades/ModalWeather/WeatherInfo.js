import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// Función que renderiza el modal con la información del clima de la ciudad elegida
export default function WeatherInfo(props) {
  const { data } = props;

  const kelvin = 273.15;

  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.description}>{data.weather[0].description}</Text>
      <View style={styles.weatherTemp}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          }}
        />
        <Text style={styles.tempValue}>
          {parseInt(data.main.temp - kelvin)}{' '}
        </Text>
        <Text style={styles.grado}>&#x2103;</Text>
      </View>
      <Text style={styles.feelsLike}>
        {' '}
        Sensación Térmica de {parseInt(data.main.feels_like - kelvin)}
        <Text>&#x2103;</Text>
      </Text>
      <View style={styles.tempContainer}>
        <Text>
          Máx. {parseInt(data.main.temp_max - kelvin)} <Text>&#x2103;</Text>
        </Text>
        <Text>
          Mín. {parseInt(data.main.temp_min - kelvin)} <Text>&#x2103;</Text>
        </Text>
      </View>
      <View style={styles.extrasContainer}>
        <Text style={styles.extrasTitle}>Información actual</Text>

        <View>
          <View>
            <Text>Humedad</Text>
            <Text>Presión</Text>
            <Text>Viento</Text>
            <Text>Visibilidad</Text>
          </View>
          <View style={styles.extrasValues}>
            <Text> {data.main.humidity}% </Text>
            <Text> {data.main.pressure}hPA </Text>
            <Text> {parseInt(data.wind.speed * 3.6)}km/h </Text>
            <Text> {parseInt(data.visibility / 1000)}km </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: 'black',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherTemp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 65,
    height: 65,
  },
  tempValue: {
    fontSize: 50,
  },
  grado: {
    fontSize: 25,
    color: 'grey',
  },
  feelsLike: {
    alignSelf: 'center',
    color: 'black',
  },
  tempContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  extrasContainer: {
    width: '100%',
    marginTop: 25,
    marginLeft: 30,
  },
  extrasTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  extrasValues: {
    position: 'absolute',
    left: 100,
  },
});
