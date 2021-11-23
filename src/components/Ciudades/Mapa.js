import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default function Mapa(props){
  const { cities } = props;

  const initialRegion = {
    latitude: cities[0].coord.lat,
    longitude: cities[0].coord.lon,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  }

  return (
    <MapView style={styles.mapStyle} initialRegion={initialRegion}>
      {cities.map((city, index) => (
          <Marker
            coordinate={{
              latitude: city.coord.lat,
              longitude: city.coord.lon,
            }}
            key={index}
            // image={{ uri: infoCiudad[0].current.condition.icon }}
          />
        )
      )}
    </MapView>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height
  }
});