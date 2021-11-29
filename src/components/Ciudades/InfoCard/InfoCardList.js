import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import InfoCard from './InfoCard';
import colors from '../../../../assets/colors';
import * as database from '../../../utils/databaseController';

// Función que renderiza la lista completa de ciudades
export default function InfoCardList(props) {
  const { cities, setCities, setModalVisible, setModalCity, setSnackbarMsg } =
    props;

  //Función que elimina la ciudad seleccionada
  const eliminarCiudad = (id) => {
    database.del(id);
    database.read(setCities);
    setSnackbarMsg('La ciudad se eliminó correctamente');
  };

  return (
    <>
      {cities.length === 0 ? (
        <View style={styles.listaVaciaContainer}>
          <Text style={styles.listaVaciaTexto}>
            {'Tu lista de ciudades se \n encuentra vacía'}
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {cities.map((city) => (
            <InfoCard
              key={city.key}
              city={city}
              setModalVisible={setModalVisible}
              setModalCity={setModalCity}
              eliminarCiudad={eliminarCiudad}
            />
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  listaVaciaContainer: {
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.GENERAL,
  },
  listaVaciaTexto: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.LIGHTGREY,
    textAlignVertical: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 150,
  },
});
