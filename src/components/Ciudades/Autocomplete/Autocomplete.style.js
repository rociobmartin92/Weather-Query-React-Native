import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: '800',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  textStyleOptions: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    textTransform: 'capitalize',
  },
  menuOptionStyle: {
    paddingHorizontal: 28,
    paddingVertical: 7,
  },
  cajaDesplegable: {
    alignSelf: 'center',
    width: '100%',
    maxHeight: 250,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  arrowStyle: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    paddingTop: 22,
    marginLeft: 9,
    paddingRight: 15,
  },
  triangle: {
    fontSize: 35,
  },
});
export default styles;
