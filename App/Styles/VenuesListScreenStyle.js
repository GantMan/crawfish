import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../Themes/'

export default StyleSheet.create({
  texty: {
    alignSelf: 'center'
  },
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  listy: {
    marginBottom: 20,
    marginTop: Metrics.navBarHeight + Metrics.baseMargin
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute'
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
