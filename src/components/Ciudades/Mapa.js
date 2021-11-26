import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Loader from '../../components/Loader/Loader';
import weatherAPI from '../../services/weatherAPI.service';

export default function Mapa(props) {
  const { cities } = props;
  const kelvin = 273.15;
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [loading, setLoading] = useState(false);
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

    setInitialLocation({
      latitude: cities[0].coord.lat,
      longitude: cities[0].coord.lon,
      latitudeDelta: deltaX === 0 ? 0.0922 : deltaX * 3,
      longitudeDelta: deltaY === 0 ? 0.0421 : deltaY * 3,
    });
  }

  useEffect(() => {
    setLoading(true);
    let citiesArray = [];
    getRegionForCoordinates(cities);
    for (let i = 0; i < cities.length; i++) {
      weatherAPI(cities[i].coord.lat, cities[i].coord.lon).then((item) => {
        citiesArray.push(item);
        console.log('item', item);
      });
    }
    console.log('array', citiesArray);

    setLoading(false);
    setCitiesWeather(citiesArray);
  }, []);

  return (
    <MapView style={styles.mapStyle} initialRegion={initialLocation}>
      {citiesWeather.map((city, index) => {
        console.log(city.name);
        return (
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
        );
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
