import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './CardCiudad.style';

function CardCiudad(props) {
  const { data } = props;
  return (
    <View>
      <Text> {data.nombre}</Text>
    </View>
  );
}

export default CardCiudad;
