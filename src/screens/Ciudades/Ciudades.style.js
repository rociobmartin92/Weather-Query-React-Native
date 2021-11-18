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
    marginBottom: 15,
    width: 120,
    height: 50,
    position: 'absolute',
    bottom: 5,
    right: 5,
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
});
