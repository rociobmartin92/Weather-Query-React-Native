import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-root-toast';

import localidadesAPI from '../../services/localidadesAPI.service';
import Autocomplete from '../../components/Ciudades/Autocomplete/Autocomplete.component';
import * as database from '../../utils/databaseController';

import colors from '../../../assets/colors';

export default function AutocompleteBar(props) {
  const { setShowSnackbarAdd, cities, setCities } = props;
  const [listadoLocalidades, setListadoLocalidades] = useState(false);
  const [valueSelected, setValueSelected] = useState(null);
  const [loadingBtnAdd, setLoadingBtnAdd] = useState(false);

  useEffect(() => {
    localidadesAPI().then((localidad) => {
      setListadoLocalidades(localidad);
    });
  }, []);

  const agregarCiudad = () => {
    if (!valueSelected) {
      Toast.show('Debe completar la ciudad a agregar', { position: -200 });
      return;
    }

    let repeated = false;
    cities.forEach((city) => {
      if (
        city.coord.lat === valueSelected.centroide_lat &&
        city.coord.lon === valueSelected.centroide_lon
      )
        repeated = true;
    });
    if (repeated) {
      Toast.show('Esta ciudad ya ha sido agregada a la lista', {
        position: -200,
      });
      return;
    }

    let city = {
      provincia: valueSelected.provincia_nombre,
      name: valueSelected.nombre,
      coord: {
        lat: valueSelected.centroide_lat,
        lon: valueSelected.centroide_lon,
      },
    };

    database.add(JSON.stringify(city), setCities);
    database.read(setCities);

    setShowSnackbarAdd(true);
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  btnAdd: {
    backgroundColor: colors.GENERAL,
    height: 57,
    width: 57,
  },
});
