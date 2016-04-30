import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../Themes/'

export default StyleSheet.create({

  container: {
    flex: 1,
    height: Metrics.screenHeight,
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
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
  }
})
