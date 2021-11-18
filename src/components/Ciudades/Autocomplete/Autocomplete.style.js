import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  inputContainer: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginTop: -6,
  },

  textStyleOptions: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    textTransform: 'capitalize',
  },
  menuOptionStyle: {
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  cajaDesplegable: {
    width: '99%',
    alignSelf: 'center',
    maxHeight: 250,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});
export default styles;
