import { StyleSheet } from 'react-native'
import { Metrics } from '../Themes/'

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
    marginTop: Metrics.navBarHeight
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute'
    // width: Metrics.screenWidth,
    // height: Metrics.screenHeight
  }
})
