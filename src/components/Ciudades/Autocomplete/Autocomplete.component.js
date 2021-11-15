import React, { useEffect, useState } from 'react';
import { View, Text, Platform, TextInput, Pressable } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Autocomplete.style';

function Autocomplete(props) {
  const {
    label,
    // valueSeleccionado,
    data,
    // valueDefault = undefined,
  } = props;

  const [valueSelected, setValueSelected] = useState('');
  const [valueFilter, setValueFilter] = useState(data);

  const [isOpen, setOpen] = React.useState(true);

  const onPressItemHandler = (itemValue) => {
    // valueSeleccionado(itemValue);
    setOpen(false);
  };

  const setDefault = () => {
    // valueSeleccionado(valueDefault);
  };

  //   useEffect(() => console.log('Data2', data), []);

  const changeValue = (value) => {
    setValueSelected(value);
    if (valueSelected === '') {
      setValueFilter(data);
      setOpen(false);
    } else {
      setOpen(true);
    }
    // if (localidadSelect.length > 0) {
    //   localidadSelect.map((loc) => {
    //     return setValueFilter({
    //       ...valueFilter,
    //       nombre: loc.nombre,
    //       latitud: loc.centroide_lat,
    //       longitud: loc.centroide_lon,
    //       provincia: loc.provincia_nombre,
    //     });
    //   });
    // } else {
    //   setValueFilter({
    //     nombre: '',
    //     latitud: '',
    //     longitud: '',
    //     provincia: '',
    //   });
    // }
  };

  const filter = () => {
    let localidadSelect = data.filter(
      (item) =>
        item.nombre.toLowerCase() === valueSelected.toLowerCase() ||
        item.provincia_nombre.toLowerCase() === valueSelected.toLowerCase() ||
        item.provincia_nombre.toLowerCase() +
          ' ' +
          item.nombre.toLowerCase() ===
          valueSelected.toLowerCase() ||
        item.nombre.toLowerCase() +
          ' ' +
          item.provincia_nombre.toLowerCase() ===
          valueSelected.toLowerCase() ||
        item.provincia_nombre.toLowerCase() +
          ', ' +
          item.nombre.toLowerCase() ===
          valueSelected.toLowerCase() ||
        item.nombre.toLowerCase() +
          ', ' +
          item.provincia_nombre.toLowerCase() ===
          valueSelected.toLowerCase()
    );
    localidadSelect === [] ? setOpen(false) : setOpen(true);
    return localidadSelect;
  };

  useEffect(() => {
    if (data !== false) {
      setValueFilter(filter());
    }
  }, [valueSelected]);

  return (
    <>
      <Pressable
        key={`combobox-${label}`}
        onPress={() => {
          setOpen(!isOpen);
        }}
      >
        <TextInput
          onChangeText={changeValue}
          value={valueSelected}
          style={styles.textStyle}
          placeholder="Localidad"

          // right={
          //   <TextInput.Icon
          //     name={() => (
          //       <FontAwesome
          //         name={isOpen ? 'angle-up' : 'angle-down'}
          //         size={20}
          //         style={styles.triangle}
          //       />
          //     )}
          //   />
          // }
        />
      </Pressable>

      {isOpen ? (
        <View>
          <View style={styles.cajaDesplegable}>
            <ScrollView>
              {valueFilter.slice(0, 50).map((item, key) => (
                <TouchableOpacity
                  onPress={() => {
                    onPressItemHandler(item.nombre);
                  }}
                  key={`item-${key}`}
                  style={styles.menuOptionStyle}
                >
                  <Text
                    style={styles.textStyleOptions}
                    key={`item-${key}`}
                  >{`${item.nombre}, ${item.provincia_nombre} `}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : null}
    </>
  );
}

export default Autocomplete;
