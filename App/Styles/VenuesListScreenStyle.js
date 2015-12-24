import { StyleSheet } from 'react-native'
import { Metrics } from '../Themes/'

export default StyleSheet.create({
  texty: {
    alignSelf: 'center'
  },
  listy: {
    marginBottom: 20,
    marginTop: Metrics.navBarHeight
  },
  image: {
    flex: 1,
    position: 'absolute'
    // width: Metrics.screenWidth,
    // height: Metrics.screenHeight
  }
})
