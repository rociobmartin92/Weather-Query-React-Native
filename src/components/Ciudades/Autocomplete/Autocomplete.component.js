import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton, TextInput } from 'react-native-paper';
import colors from '../../../../assets/colors';
import { capitalizeFirstLetter } from '../../../utils/capitalize';

// Función que renderiza input Autocomplete

function Autocomplete(props) {
  const { data, label, valueSelected } = props;
  const [valueInput, setValueInput] = useState('');
  const [valueFilter, setValueFilter] = useState(data);
  const [placeSelected, setPlaceSelected] = useState(null);
  const [valueShow, setValueShow] = useState('');
  const [isOpen, setOpen] = React.useState(true);

  const onPressItemHandler = (itemValue) => {
    valueSelected(itemValue);
    setPlaceSelected(itemValue);
    setValueShow(
      capitalizeFirstLetter(itemValue.nombre) +
        ', ' +
        capitalizeFirstLetter(itemValue.provincia_nombre)
    );
    setOpen(false);
  };

  const changeValue = (value) => {
    valueSelected(undefined);
    setPlaceSelected(null);
    setValueShow(value);
    setValueInput(capitalizeFirstLetter(value));
    if (valueInput === '') {
      setValueFilter(data);
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // Función que filtra los resultados de la búsqueda
  const filter = () => {
    let localidadSelect = data.filter(
      (item) =>
        item.nombre.toLowerCase() === valueInput.toLowerCase() ||
        item.provincia_nombre.toLowerCase() === valueInput.toLowerCase() ||
        item.provincia_nombre.toLowerCase() +
          ' ' +
          item.nombre.toLowerCase() ===
          valueInput.toLowerCase() ||
        item.nombre.toLowerCase() +
          ' ' +
          item.provincia_nombre.toLowerCase() ===
          valueInput.toLowerCase() ||
        item.provincia_nombre.toLowerCase() +
          ', ' +
          item.nombre.toLowerCase() ===
          valueInput.toLowerCase() ||
        item.nombre.toLowerCase() +
          ', ' +
          item.provincia_nombre.toLowerCase() ===
          valueInput.toLowerCase()
    );
    localidadSelect === [] ? setOpen(false) : setOpen(true);
    return localidadSelect;
  };

  useEffect(() => {
    if (data !== false && data !== undefined) {
      setValueFilter(filter());
    }
  }, [valueInput]);

  return (
    <>
      <TextInput
        theme={{
          colors: {
            primary: colors.GENERAL,
          },
        }}
        onChangeText={changeValue}
        value={valueShow}
        defaultValue={valueInput}
        label={label}
        style={styles.inputContainer}
        mode="outlined"
        right={
          valueInput !== '' ? (
            <TextInput.Icon
              name={() => (
                <IconButton
                  icon="close-circle-outline"
                  color={colors.GENERAL}
                  size={20}
                  onPress={() => {
                    setValueInput(''), setPlaceSelected(''), setValueShow('');
                  }}
                />
              )}
            />
          ) : null
        }
      />

      {isOpen ? (
        <View style={styles.cajaDesplegable}>
          <ScrollView>
            {valueFilter
              ? valueFilter.slice(0, 50).map((item, key) => (
                  <TouchableOpacity
                    onPress={() => {
                      onPressItemHandler(item);
                    }}
                    key={`item-${key}`}
                    style={styles.menuOptionStyle}
                  >
                    <Text
                      style={styles.textStyleOptions}
                      key={`item-${key}`}
                    >{`${item.nombre}, ${item.provincia_nombre} `}</Text>
                  </TouchableOpacity>
                ))
              : null}
          </ScrollView>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginTop: -6,
  },

  textStyleOptions: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    textTransform: 'capitalize',
  },
  menuOptionStyle: {
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  cajaDesplegable: {
    zIndex: 999,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 59,
    width: '99%',
    alignSelf: 'center',
    maxHeight: 250,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});

export default Autocomplete;
