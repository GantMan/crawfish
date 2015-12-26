'use strict'

import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../Themes/'

const NavigationStyle = StyleSheet.create({
  navTitle: {
    color: Colors.white,
    marginTop: 8,
    marginLeft: 8,
    fontSize: Metrics.fonts.normal,
    fontFamily: Fonts.fancy,
    padding: Metrics.titlePadding
  },
  backButtonText: {
    color: Colors.white,
    marginTop: 8,
    marginLeft: 8,
    fontFamily: Fonts.bold,
    padding: Metrics.titlePadding
  },
  navigationBar: {
    backgroundColor: Colors.charcoal
  }
})

export default NavigationStyle
