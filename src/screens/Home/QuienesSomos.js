import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function QuienesSomos() {
  return (
    <View>
      <Text style={estilos.text}>
        Esta aplicación fue creada como proyecto final para el curso de
        Especialización en desarrollo mobile de IBM Skills y Codo a Codo.
      </Text>
      <Text style={estilos.sub}> Somos un grupo de 5 programadores:</Text>

      {list.map((el, index) => (
        <ListItem key={index} style={estilos.cnt}>
          <Avatar rounded source={{ uri: el.foto }} style={estilos.foto} />
          <ListItem.Content>
            <ListItem.Title style={estilos.tit}>{el.nombre}</ListItem.Title>
            <ListItem.Subtitle style={estilos.subtit}>{el.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

const list = [
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4E03AQFZTOvdhTtSLA/profile-displayphoto-shrink_800_800/0/1637446861781?e=1642636800&v=beta&t=EDn4Mc7LiDieWtAMwERm4JcVrq4_xI-Uqg_X_a--rnM",
    nombre: "Rocío Martín",
    email: "martinrocio.1992@gmail.com"
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4D03AQGHxBBOfy1Gdw/profile-displayphoto-shrink_800_800/0/1627515042179?e=1642636800&v=beta&t=Dni_ZiXTb6LEL8qORyhy6Q_oynwwoK1ETyn_lwFrr_Y",
    nombre: "Joel Sotelo Trobat",
    email: "joel_sotelo_trobat@outlook.com"
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4E03AQFZTOvdhTtSLA/profile-displayphoto-shrink_800_800/0/1637446861781?e=1642636800&v=beta&t=EDn4Mc7LiDieWtAMwERm4JcVrq4_xI-Uqg_X_a--rnM",
    nombre: "Rocio Martin",
    email: "martinrocio.1992@gmail.com"
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4E03AQFZTOvdhTtSLA/profile-displayphoto-shrink_800_800/0/1637446861781?e=1642636800&v=beta&t=EDn4Mc7LiDieWtAMwERm4JcVrq4_xI-Uqg_X_a--rnM",
    nombre: "Rocio Martin",
    email: "martinrocio.1992@gmail.com"
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4E03AQFZTOvdhTtSLA/profile-displayphoto-shrink_800_800/0/1637446861781?e=1642636800&v=beta&t=EDn4Mc7LiDieWtAMwERm4JcVrq4_xI-Uqg_X_a--rnM",
    nombre: "Rocio Martin",
    email: "martinrocio.1992@gmail.com"
  },
];
const estilos = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 45,
    marginLeft: 30,
    marginRight: 40,
    fontFamily: "sans-serif-condensed",
  },
  sub: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    marginBottom:15,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 35,
    fontFamily: "sans-serif-condensed",
  },
  cnt: {marginLeft:10},
  foto: {width:50, height:50},
  tit: {fontSize: 20},
  subtit: {fontSize: 17}
});
