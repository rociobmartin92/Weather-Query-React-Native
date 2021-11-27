import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Loader from '../../components/Loader/Loader';
import weatherAPI from '../../services/weatherAPI.service';

export default function Mapa(props) {
  const { cities, modalCity, centerMapOnCity } = props;
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLocation, setInitialLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  function getRegionForCoordinates(points) {
    let minX, maxX, minY, maxY;

    ((point) => {
      minX = point.coord.lat;
      maxX = point.coord.lat;
      minY = point.coord.lon;
      maxY = point.coord.lon;
    })(points[0]);

    points.map((point) => {
      minX = Math.min(minX, parseFloat(point.coord.lat));
      maxX = Math.max(maxX, point.coord.lat);
      minY = Math.min(minY, point.coord.lon);
      maxY = Math.max(maxY, point.coord.lon);
    });

    const deltaX = maxX - minX;
    const deltaY = maxY - minY;

    let centerlat = minX + ((maxX - minX) / 2); 
    let centerlon = minY + ((maxY - minY) / 2); 

    return (
      {
        latitude: centerlat,
        longitude: centerlon,
        latitudeDelta: deltaX === 0 ? 0.0922 : deltaX * 2,
        longitudeDelta: deltaY === 0 ? 0.0421 : deltaY * 2,
      }
    );
  }

  useEffect(async () => {
    setLoading(true);

    if (centerMapOnCity) {
      setInitialLocation({
        latitude: modalCity.coord.lat,
        longitude: modalCity.coord.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      setInitialLocation(getRegionForCoordinates(cities));
    }

    let citiesArray = [];
    for (let i = 0; i < cities.length; i++) {
      await weatherAPI(cities[i].coord.lat, cities[i].coord.lon)
      .then( item => {
          citiesArray = citiesArray.length === 0 ? [item] : [...citiesArray, item];
        }
      );
    }
    setCitiesWeather(citiesArray);

    setLoading(false);
  }, []);

  const kelvin = 273.15;

  return (
    <>
    { loading ? <Loader /> :
      <MapView style={styles.mapStyle} initialRegion={initialLocation}>
        {citiesWeather.map((city, index) => (
          <Marker
            coordinate={{
              latitude: city.coord.lat,
              longitude: city.coord.lon,
            }}
            key={index}
            title={parseInt(city.main.temp - kelvin) + ' °C'}
          >
            <Image
              source={{
                uri: `http://openweathermap.org/img/w/${city.weather[0].icon}.png`,
              }}
              style={{ width: 66, height: 58 }}
            />
          </Marker>
        ))}
      </MapView>
    }
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
