'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
    width: Metrics.screenWidth - 20,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
  },
  myImage: {
    flex: 7,
    width: Metrics.screenWidth - 20,
    height: 140,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  backgroundContainer: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: Colors.transDark,
    justifyContent: 'center'
  },
  detailsContainer: {
    flex: 3,
    backgroundColor: Colors.charcoal,
    justifyContent: 'center'
  },
  priceBoiled: {
    color: Colors.lightGreen,
    paddingTop: 10,
    fontSize: 18,
    fontFamily: Fonts.bold,
    alignSelf: 'center'
  },
  button: {
    marginTop: 30,
    backgroundColor: Colors.orange,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    bottom: 0
  },
  buttonText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Fonts.base
  },
  overlayContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.transBlack,
    height: 30,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: Metrics.screenWidth - 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    paddingLeft: 10,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.bold
  },
  distance: {
    paddingRight: 20,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.base
  }
})
