'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.black
  },
  myImage: {
    width: Metrics.screenWidth - 20,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  overlayContainer: {
    backgroundColor: Colors.transDark,
    height: 30,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: Metrics.screenWidth - 20,
    justifyContent: 'center'
  },
  texty: {
    paddingLeft: 10,
    color: Colors.white
  }
})
