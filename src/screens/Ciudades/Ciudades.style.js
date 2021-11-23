import { StyleSheet } from 'react-native';
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
  cardContainer: {
    width: '100%',
  },
});
