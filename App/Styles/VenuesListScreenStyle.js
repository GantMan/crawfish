import { StyleSheet } from 'react-native'
import { Metrics } from '../Themes/'

export default StyleSheet.create({
  logo: {
    flex: 1,
    // width: Metrics.screenWidth/1.3,
    resizeMode: 'contain', // contain, cover, stretch
    alignSelf: 'center'
  },
  subdomain: {
    flex: 1
  },
  continue: {
    bottom: 50
  },
  container: {
    marginTop: Metrics.navBarHeight
  },
  screenContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center'
  },
  texty: {
    alignSelf: 'center'
  }
})
