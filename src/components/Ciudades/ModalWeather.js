import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';

import weatherAPI from '../../services/weatherAPI.service';
import colors from '../../../assets/colors';
import WeatherInfo from './WeatherInfo';

export default function ModalWeather(props) {
  const { setModalVisible, modalVisible, modalCity, setIsOnMap, setCenterMapOnCity } = props;

  const [weather, setWeather] = useState(emptyWeaterObj);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (modalVisible && modalCity.coord) {
      setIsLoading(true);

      weatherAPI(modalCity.coord.lat, modalCity.coord.lon).then((response) => {
        setWeather(response);
        setIsLoading(false);
      });
    }
  }, [modalVisible]);

  return (
    <Overlay
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={styles.mainContainer}
    >
      <View style={styles.titleContainer}>
        <Text> {modalCity.provincia} </Text>
        <Text style={styles.name}> {modalCity.name} </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          color={colors.GENERAL}
          style={styles.centerLoading}
        />
      ) : (
        <WeatherInfo data={weather} />
      )}

      <Icon
        name="location-on"
        size={35}
        containerStyle={styles.iconContainer}
        color={colors.GENERAL}
        onPress={() => {
          setIsOnMap(true);
          setCenterMapOnCity(true);
          setModalVisible(false);
        }}
      />
    </Overlay>
  );
}

const emptyWeaterObj = {
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  visibility: 10000,
  weather: [
    {
      description: 'null',
      icon: '01n',
      main: 'Clear',
    },
  ],
  wind: {
    speed: 6.69,
  },
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    height: '70%',
    maxHeight: 430,
    borderRadius: 20,
    borderWidth: 2,
    padding: 20,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  centerLoading: {
    height: '70%',
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
});
