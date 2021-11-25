import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

import colors from "../../../assets/colors";

export default function InfoCard(props){
  const { city, eliminarCiudad } = props;
  const navigation = useNavigation();

  return (

    <TouchableOpacity 
      style={styles.card}
      onPress={() => {
        /// TODO: CAMBIAR EL NAVIGATE POR LA APERTURA DEL MODAL
        navigation.navigate('miCiudad')
      }}
    >
      <Icon 
        name="fullscreen"
        style={styles.iconSty}
      />
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
    alignItems: 'center'

  },
  iconSty: {
    marginLeft: 15
  },
  txtContainer:{
    width: "70%",
    margin: 12,
    marginLeft: 20,
  },
  provincia: {
    fontSize: 13,
  },
  name: {
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 15,
  },
  btn: {
    backgroundColor: 'transparent',
    marginRight: 10
  }
});