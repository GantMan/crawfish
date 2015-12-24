'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
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
    flex: 8,
    width: Metrics.screenWidth - 20,
    height: 90,
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceBoiled: {
    color: Colors.fuckingYellow,
    paddingTop: 11.25,
    fontSize: 20,
    fontFamily: Fonts.bold,
    justifyContent: 'center'
  },
  button: {
    marginTop: 10,
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
    height: 45,
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
    fontSize: 16,
    fontFamily: Fonts.bold
  },
  subtitle: {
    paddingLeft: 10,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.base
  },
  distance: {
    paddingRight: 20,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.base
  }
})
