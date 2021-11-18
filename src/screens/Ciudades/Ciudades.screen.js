import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { Snackbar, FAB, Dialog, Portal } from 'react-native-paper';
import Toast from 'react-native-root-toast';
import MapView, { Marker } from 'react-native-maps';
import localidadesAPI from '../../services/localidadesAPI.service';
import weatherAPI from '../../services/weatherAPI.service';
import Autocomplete from '../../components/Ciudades/Autocomplete/Autocomplete.component';
import colors from '../../../assets/colors';
import { styles } from './Ciudades.style';

export default function Ciudades(props) {
  const { navigation } = props;
  const toastProps = { position: -200 };
  const [listadoLocalidades, setListadoLocalidades] = useState(false);
  const [valueSelected, setValueSelected] = useState(undefined);
  const [infoCiudad, setInfoCiudad] = useState([]);
  const [initialLocation, setInitialLocation] = useState([
    {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  ]);

  const [show, setShow] = useState(false);
  const [loadingBtnAdd, setLoadingBtnAdd] = useState(false);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    localidadesAPI().then((localidad) => {
      setListadoLocalidades(localidad);
    });
  }, []);

  const agregarCiudad = () => {
    setLoadingBtnAdd(true);
    if (valueSelected !== undefined) {
      weatherAPI(valueSelected.centroide_lat, valueSelected.centroide_lon)
        .then((clima) => {
          infoCiudad.length === 0
            ? (setInfoCiudad([clima]),
              setInitialLocation([
                {
                  latitude: clima.location.lat,
                  longitude: clima.location.lon,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.001,
                },
              ]))
            : (setInfoCiudad([...infoCiudad, clima]),
              setInitialLocation([
                ...initialLocation,
                {
                  latitude: clima.location.lat,
                  longitude: clima.location.lon,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.001,
                },
              ]));
        })
        .finally(() => {
          setLoadingBtnAdd(false);
          setShow(true);
        });
    } else {
      Toast.show('Debe completar la ciudad a agregar', toastProps);

      setLoadingBtnAdd(false);
    }
  };

  const eliminarCiudad = (index) => {
    let array = infoCiudad.filter((city, i) => index !== i);
    setInfoCiudad(array);
  };

  function CardInfo() {
    if (infoCiudad.length > 0) {
      return infoCiudad.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <Text>{item.current.condition.text}</Text>
            <Button
              icon={{
                name: 'delete',
                color: colors.GENERAL,
                type: 'material-community',
              }}
              buttonStyle={styles.btnDelete}
              containerStyle={styles.containerBtnDelete}
              titleStyle={styles.titleBtnInfo}
              onPress={() => {
                eliminarCiudad(index);
              }}
            />
            <Button
              icon={{
                name: 'information',
                color: colors.GENERAL,
                type: 'material-community',
              }}
              buttonStyle={styles.btnInfo}
              containerStyle={styles.containerBtnInfo}
              title={'Más info'}
              titleStyle={styles.titleBtnInfo}
              onPress={() => {
                navigation.navigate('miCiudad');
              }}
            />
          </View>
        );
      });
    } else {
      return (
        <View style={styles.listaVaciaContainer}>
          <Text style={styles.listaVaciaTexto}>
            {'Tu lista de ciudades se \n encuentra vacía'}
          </Text>
        </View>
      );
    }
  }

  return (
    <>
      <View style={{ paddingHorizontal: 10 }}>
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
              onPress={() => {
                agregarCiudad();
              }}
              loading={loadingBtnAdd}
            />
          </View>
        </View>
        <ScrollView style={styles.cardContainer}>
          {flag ? (
            <CardInfo />
          ) : (
            <MapView style={styles.mapStyle} initialRegion={initialLocation[0]}>
              {initialLocation.map((location, index) => {
                return (
                  <Marker
                    coordinate={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                    }}
                    key={index}
                    // image={{ uri: infoCiudad[0].current.condition.icon }}
                  />
                );
              })}
            </MapView>
          )}
        </ScrollView>
      </View>
      <Snackbar
        theme={{ colors: { surface: colors.LIGHTGREY } }}
        visible={show}
        wrapperStyle={styles.positionWrapper}
        style={styles.snackBar}
        onDismiss={() => {
          setShow(false);
        }}
        duration={1000}
      >
        La ciudad se agregó correctamente
      </Snackbar>
      <FAB
        icon={flag ? 'map-legend' : 'view-list-outline'}
        style={styles.btnFAB}
        color={colors.GENERAL}
        label={flag ? `VER MAPA` : `VER LISTA`}
        onPress={() => {
          setFlag(!flag);
        }}
        visible={infoCiudad.length === 0 ? false : true}
      />
    </>
  );
}
