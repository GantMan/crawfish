import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../Themes/'

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
    marginTop: Metrics.navBarHeight + Metrics.baseMargin * 3
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
  },
  segmentContainer: {
    top: 80,
    width: Metrics.screenWidth - 20,
    alignSelf: 'center',
    fontSize: 18
  },
  segmentTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  segment: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.base,
    paddingBottom: 4
  }
})
