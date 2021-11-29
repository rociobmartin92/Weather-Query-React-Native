import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../../../../assets/colors';

//Función que renderiza el loader
export default function Loader(props) {
  return (
    <View style={styles.viewLoader}>
      <ActivityIndicator animating={true} color={colors.GENERAL} size={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
