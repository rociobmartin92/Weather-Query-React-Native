import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ListadoLocalidades from '../../services/ListadoLocalidades.service';
import Autocomplete from '../../components/Ciudades/Autocomplete/Autocomplete.component';

export default function Ciudades() {
  const [listadoLocalidades, setListadoLocalidades] = useState(false);

  useEffect(async () => {
    await ListadoLocalidades().then((localidad) => {
      setListadoLocalidades(localidad);
    });
  }, []);

  return (
    <View style={{ paddingHorizontal: 7, paddingTop: 25, marginBottom: 25 }}>
      <Autocomplete
        label="Localidad"
        data={listadoLocalidades}
        // valueSeleccionado={(text) => {
        //   setProvinciaSelected(text);
        // }}
        // valueDefault={provinciaSelected}
      />
    </View>
  );
}
