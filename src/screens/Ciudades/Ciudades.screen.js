import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import { Snackbar } from 'react-native-paper';

import colors from '../../../assets/colors';
import AutocompleteBar from '../../components/Ciudades/Autocomplete/AutocompleteBar';
import InfoCardList from '../../components/Ciudades/InfoCard/InfoCardList';
import Mapa from '../../components/Ciudades/Mapa/Mapa';
import ModalWeather from '../../components/Ciudades/ModalWeather/ModalWeather';
import * as database from '../../utils/databaseController';

// Función que renderiza la screen de ciudades
export default function Ciudades() {
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const [isOnMap, setIsOnMap] = useState(false);
  const [centerMapOnCity, setCenterMapOnCity] = useState(false);
  const [cities, setCities] = useState([]);

  const [modalCity, setModalCity] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    database.initTable();
    database.read(setCities);
  }, []);

  return (
    <>
      {isOnMap ? (
        <Mapa
          cities={cities}
          modalCity={modalCity}
          centerMapOnCity={centerMapOnCity}
        />
      ) : (
        <View style={{ paddingHorizontal: 10 }}>
          <AutocompleteBar
            cities={cities}
            setCities={setCities}
            setSnackbarMsg={setSnackbarMsg}
          />
          <InfoCardList
            cities={cities}
            setCities={setCities}
            setSnackbarMsg={setSnackbarMsg}
            setModalVisible={setModalVisible}
            setModalCity={setModalCity}
          />
          <ModalWeather
            modalCity={modalCity}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setIsOnMap={setIsOnMap}
            setCenterMapOnCity={setCenterMapOnCity}
          />
        </View>
      )}
      <Snackbar
        theme={{ colors: { surface: colors.LIGHTGREY } }}
        visible={snackbarMsg}
        wrapperStyle={styles.positionWrapper}
        style={styles.snackBar}
        onDismiss={() => setSnackbarMsg('')}
        duration={1000}
      >
        {snackbarMsg}
      </Snackbar>
      <FAB
        visible={cities.length !== 0}
        onPress={() => {
          setIsOnMap(!isOnMap);
          setCenterMapOnCity(false);
        }}
        icon={{
          name: isOnMap ? 'apartment' : 'map',
          color: 'white',
        }}
        color={colors.GENERAL}
        placement="left"
      />
    </>
  );
}

const styles = StyleSheet.create({
  positionWrapper: {
    position: 'absolute',
    bottom: 80,
  },
  snackBar: {
    backgroundColor: colors.GENERAL,
  },
});
