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
  triangleCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 55,
    borderTopWidth: 55,
    borderRightColor: 'transparent',
    borderTopColor: Colors.darkRed
  },
  favStarSelected: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'clear',
    bottom: 27,
    left: 10,
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.bold
  },
  favStarUnselected: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'clear',
    bottom: 27,
    left: 10,
    color: Colors.transBlack,
    fontSize: 18,
    fontFamily: Fonts.bold
  },
  starButton: {
    top: 0,
    left: 0
  },
  myImage: {
    flex: 8,
    width: Metrics.screenWidth - 20,
    height: 100,
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
    color: Colors.lightGreen,
    paddingTop: 11.25,
    fontSize: 20,
    fontFamily: Fonts.bold,
    justifyContent: 'center'
  },
  leftOverlay: {
    backgroundColor: Colors.transBlack,
    height: 25,
    top: 0,
    left: 0,
    position: 'absolute'
  },
  stars: {
    height: 25,
    width: 70
  },
  overlayContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.transBlack,
    height: 40,
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
