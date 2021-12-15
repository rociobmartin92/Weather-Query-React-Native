import React from 'react';
import { Text, StyleSheet, ScrollView, Linking, View } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import colors from '../../../assets/colors';

// Función que renderiza el apartado de Quiénes Somos
export default function QuienesSomos() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        Esta aplicación fue creada como proyecto final para el curso de
        Especialización en desarrollo mobile de IBM Skills y Codo a Codo.
      </Text>
      <Text style={styles.sub}> Somos un grupo de 5 programadores:</Text>
      {list.map((el, index) => (
        <ListItem
          key={index}
          style={styles.cnt}
          onPress={() => {
            Linking.openURL(el.linkedin);
          }}
        >
          <Avatar rounded source={el.foto} style={styles.foto} />
          <ListItem.Content>
            <ListItem.Title style={styles.tit}>{el.nombre}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtit}>
              {el.email}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      <Text style={styles.text}>
        Para crear la aplicación en un principio dibujamos en papel un bosquejo
        del diseño que queríamos, y definimos las funciones que la apliación
        debía tener, luego realizamos ese diseño en Figma y creamos el Persona
        Canvas:
      </Text>
      <View style={styles.boxLinks}>
        <Text style={styles.canvas}>PAPER PROTOTYPE</Text>
        <Icon
          name="open-in-new"
          type="material-community"
          color={colors.GREY}
          onPress={() => {
            Linking.openURL('https://marvelapp.com/aagd811');
          }}
        />
      </View>
      <View style={styles.boxLinks}>
        <Text style={styles.canvas}>PERSONA CANVAS: PAULA</Text>
        <Icon
          name="open-in-new"
          type="material-community"
          color={colors.GREY}
          onPress={() => {
            Linking.openURL(
              'https://www.canva.com/design/DAEu2y2O1Ug/dwLB2zxo-iJ-c1osFPrP4Q/edit'
            );
          }}
        />
      </View>

      <Text style={styles.text}>
        Una vez terminado, creamos un repositorio y agregamos a los integrantes.
        De la rama principal, master, generamos dos branches, una para la
        sección de "Home" y otra para la sección de "Ciudades" y trabajamos por
        separado en ellas, luego mergeamos ambas branches al master. Utilizamos
        Git y Github como herramientas de control de versiones y Discord para
        realizar las reuniones entre nosotros. Además diseñamos un logo con la
        herramienta Canva.
      </Text>
    </ScrollView>
  );
}

const list = [
  {
    foto: require('../../../assets/Rocio.png'),
    nombre: 'Rocío Martín',
    email: 'martinrocio.1992@gmail.com',
    linkedin: 'https://www.linkedin.com/in/roc%C3%ADo-b-mart%C3%ADn-953978146/',
  },
  {
    foto: require('../../../assets/Joel.png'),
    nombre: 'Joel Sotelo Trobat',
    email: 'joel_sotelo_trobat@outlook.com',
    linkedin: 'https://www.linkedin.com/in/joel-sotelo-trobat/',
  },
  {
    foto: require('../../../assets/Santiago.png'),
    nombre: 'Santiago Toledo',
    email: 'it.santiagotoledo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/santiagotoledo/',
  },
  {
    foto: require('../../../assets/Gaston.png'),
    nombre: 'Gastón Colaneri',
    email: 'colaneri.gaston@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/cgastoncolaneri/',
  },
  {
    foto: require('../../../assets/Hugo.png'),
    nombre: 'Hugo Mauricio Morales Acevedo',
    email: 'hugoacevedo46.46@gmail.com',
    linkedin:
      'https://www.linkedin.com/in/hugo-mauricio-morales-acevedo-452611186/',
  },
];
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    fontFamily: 'sans-serif-condensed',
  },
  sub: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 35,
    fontFamily: 'sans-serif-condensed',
  },
  cnt: { marginLeft: 10 },
  foto: { width: 55, height: 55 },
  tit: { fontSize: 20 },
  subtit: { fontSize: 17 },
  canvas: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
    fontFamily: 'sans-serif-condensed',
  },
  boxLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
