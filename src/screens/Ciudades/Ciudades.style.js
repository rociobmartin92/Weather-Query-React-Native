import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../assets/colors';
export const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  btnAdd: {
    backgroundColor: colors.GENERAL,
    height: 57,
    width: 57,
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: colors.LIGHTGREY,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  btnInfo: { backgroundColor: colors.LIGHTGREY, width: '100%', height: '100%' },
  containerBtnInfo: {
    marginBottom: 0,
    width: 120,
    height: 50,
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  btnDelete: {
    backgroundColor: colors.LIGHTGREY,
    width: '100%',
    height: '100%',
  },
  containerBtnDelete: {
    marginBottom: 15,
    position: 'absolute',
    top: 5,
    right: 5,
    width: 50,
    height: 50,
    backgroundColor: colors.GENERAL,
  },
  titleBtnInfo: {
    color: colors.GENERAL,
  },
  positionWrapper: {
    position: 'absolute',
    bottom: 5,
  },
  snackBar: {
    backgroundColor: colors.GENERAL,
  },
  listaVaciaContainer: {
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.GENERAL,
  },
  listaVaciaTexto: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.LIGHTGREY,
    textAlignVertical: 'center',
  },
  btnFAB: {
    position: 'absolute',
    margin: 16,
    bottom: 55,
    alignSelf: 'center',
    backgroundColor: colors.LIGHTGREY,
  },
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height - 210,
    marginTop: 10,
  },
  card_info: {
    position: "absolute",
    top: 15,
    left: 50,
  },
  card_info_desc: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  card_info_temp: {
    position: "absolute",
    top: 20,
    left: 135
  },
  temperatura: {
    fontSize: 40,
  },
  grado: {
    fontSize: 20,
    color: "grey"
  },
  card_info_location: {
    textTransform: "uppercase",
    paddingLeft: 10,
  },
  card_info_extra: {
    position: "absolute",
    bottom: 15,
    left: 18,
  },
});
