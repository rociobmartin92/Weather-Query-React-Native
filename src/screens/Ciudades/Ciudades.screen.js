import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import { Snackbar } from 'react-native-paper';

import colors from '../../../assets/colors';
import AutocompleteBar from '../../components/Ciudades/AutocompleteBar';
import InfoCardList from '../../components/Ciudades/InfoCardList';
import Mapa from '../../components/Ciudades/Mapa';
import ModalWeather from '../../components/Ciudades/ModalWeather';
import * as database from '../../utils/databaseController';

export default function Ciudades() {
  const [showSnackbarAdd, setShowSnackbarAdd] = useState(false);
  const [showSnackbarDelete, setShowSnackbarDelete] = useState(false);

  const [isOnMap, setIsOnMap] = useState(false);
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
        <Mapa cities={cities} />
      ) : (
        <View style={{ paddingHorizontal: 10 }}>
          <AutocompleteBar
            setShowSnackbarAdd={setShowSnackbarAdd}
            cities={cities}
            setCities={setCities}
          />
          <InfoCardList
            cities={cities}
            setCities={setCities}
            setModalVisible={setModalVisible}
            setModalCity={setModalCity}
            setShowSnackbarDelete={setShowSnackbarDelete}
          />
          <ModalWeather
            modalCity={modalCity}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            setIsOnMap={setIsOnMap}
          />
        </View>
      )}
      <Snackbar
        theme={{ colors: { surface: colors.LIGHTGREY } }}
        visible={showSnackbarAdd}
        wrapperStyle={styles.positionWrapper}
        style={styles.snackBar}
        onDismiss={() => setShowSnackbarAdd(false)}
        duration={1000}
      >
        La ciudad se agregó correctamente
      </Snackbar>
      <Snackbar
        theme={{ colors: { surface: colors.LIGHTGREY } }}
        visible={showSnackbarDelete}
        wrapperStyle={styles.positionWrapper}
        style={styles.snackBar}
        onDismiss={() => setShowSnackbarDelete(false)}
        duration={1000}
      >
        La ciudad se eliminó correctamente
      </Snackbar>
      <FAB
        visible={cities.length === 0 ? false : true}
        onPress={() => setIsOnMap(!isOnMap)}
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
