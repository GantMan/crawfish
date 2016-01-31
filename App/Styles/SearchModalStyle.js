import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 5,
    fontSize: Metrics.fonts.input,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
  }
})
