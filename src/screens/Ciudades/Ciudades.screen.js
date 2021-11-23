import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Snackbar, FAB } from 'react-native-paper';
import Toast from 'react-native-root-toast';
import localidadesAPI from '../../services/localidadesAPI.service';
import weatherAPI from '../../services/weatherAPI.service';
import Autocomplete from '../../components/Ciudades/Autocomplete/Autocomplete.component';

import colors from '../../../assets/colors';
import { styles } from './Ciudades.style';
import InfoCard from '../../components/Ciudades/InfoCard';
import Mapa from '../../components/Ciudades/Mapa';
import * as database from "../../utils/databaseController";

export default function Ciudades() {
  const [listadoLocalidades, setListadoLocalidades] = useState(false);
  const [valueSelected, setValueSelected] = useState(null);
  
  const [show, setShow] = useState(false);
  const [loadingBtnAdd, setLoadingBtnAdd] = useState(false);
  const [isOnMap, setIsOnMap] = useState(false);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    localidadesAPI().then((localidad) => {
      setListadoLocalidades(localidad);
    });

    database.initTable();
    database.read(setCities);
  }, []);

  const agregarCiudad = () => {
    if (!valueSelected) {
      Toast.show('Debe completar la ciudad a agregar', { position: -200 });
      return;
    }

    setLoadingBtnAdd(true);

    weatherAPI(valueSelected.centroide_lat, valueSelected.centroide_lon)
    .then((city) => { 
      database.add(JSON.stringify(city), setCities);
      database.read(setCities);

      setLoadingBtnAdd(false);
      setShow(true);
    })
  };

  const eliminarCiudad = (id) => {
    database.del(id, setCities);
    database.read(setCities);
  };

  function CardsInfo() {
    if (cities.length === 0) {
      return (
        <View style={styles.listaVaciaContainer}>
          <Text style={styles.listaVaciaTexto}>
            {'Tu lista de ciudades se \n encuentra vacía'}
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.cardContainer}>
        {cities.map((city) => (
          <InfoCard city={city} eliminarCiudad={eliminarCiudad} key={city.key}/>
        ))}
      </ScrollView>
    );
  }

  return (
    <>
      { isOnMap ? <Mapa cities={cities} /> :
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.inputContainer}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Autocomplete
              label="Agregar ciudad"
              data={listadoLocalidades}
              valueSelected={setValueSelected}
            />
          </View>
          <View>
            <Button
              icon={{
                name: 'plus-box',
                color: colors.LIGHTGREY,
                type: 'material-community',
              }}
              buttonStyle={styles.btnAdd}
              onPress={agregarCiudad}
              loading={loadingBtnAdd}
            />
          </View>
        </View>
        <CardsInfo />
      </View>}
      <Snackbar
        theme={{ colors: { surface: colors.LIGHTGREY } }}
        visible={show}
        wrapperStyle={styles.positionWrapper}
        style={styles.snackBar}
        onDismiss={() => setShow(false)}
        duration={1000}
      >
        La ciudad se agregó correctamente
      </Snackbar>
      <FAB
        icon={isOnMap ? 'view-list-outline' : 'map-legend'}
        style={styles.btnFAB}
        color={colors.GENERAL}
        label={isOnMap ? 'VER LISTA' : 'VER MAPA'}
        onPress={() => setIsOnMap(!isOnMap)}
        visible={cities.length === 0 ? false : true}
      />
    </>
  );
}
