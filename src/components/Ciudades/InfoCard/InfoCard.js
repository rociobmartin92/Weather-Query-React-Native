import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../../../../assets/colors';

// Función que renderiza la card con el nombre de la ciudad y la posibilidad de abrir el modal y eliminar la ciudad
export default function InfoCard(props) {
  const { city, eliminarCiudad, setModalVisible, setModalCity } = props;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setModalCity(city);
        setModalVisible(true);
      }}
    >
      <Icon name="fullscreen" style={styles.iconSty} />
      <View style={styles.txtContainer}>
        <Text numberOfLines={1} style={styles.provincia}>
          {city.provincia}
        </Text>
        <Text numberOfLines={1} style={styles.name}>
          {city.name}
        </Text>
      </View>
      <Button
        icon={{
          name: 'delete',
          color: colors.GENERAL,
          type: 'material-community',
        }}
        buttonStyle={styles.btn}
        onPress={() => eliminarCiudad(city.key)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.LIGHTGREY,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconSty: {
    marginLeft: 15,
  },
  txtContainer: {
    width: '70%',
    margin: 12,
    marginLeft: 20,
  },
  provincia: {
    fontSize: 13,
  },
  name: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 15,
  },
  btn: {
    backgroundColor: 'transparent',
    marginRight: 10,
  },
});
