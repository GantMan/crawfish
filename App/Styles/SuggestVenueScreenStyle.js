import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  placemat: {
    top: 10,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
  },
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
  },
  separatorLine: {
    height: 1.5,
    width: Metrics.screenWidth - 60,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  divider: {
    alignSelf: 'center',
    marginTop: -10
  },
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'stretch'
  },
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Colors.transWhite
  }
})
