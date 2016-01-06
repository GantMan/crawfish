import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../Themes/'

export default StyleSheet.create({
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'stretch'
  },
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: Colors.transWhite
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
    // borderBottomWidth: 1.5,
    // borderColor: Colors.white,
    width: Metrics.screenWidth - 60,
    alignSelf: 'center'
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: Fonts.emphasis,
    color: Colors.white,
    paddingBottom: 5
  },
  boldLabel: {
    flex: 1,
    fontSize: Metrics.fonts.medium,
    fontFamily: Fonts.bold,
    color: Colors.white
  },
  dataLabel: {
    flex: 2,
    fontSize: Metrics.fonts.medium,
    fontFamily: Fonts.base,
    color: Colors.white
  },
  dataContainer: {
    flexDirection: 'column',
    flex: 2
  },
  mapContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight + Metrics.baseMargin,
    height: 200,
    width: Metrics.screenWidth - 20,
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2,
    borderRadius: 5
  },
  map: {
    height: 200,
    width: Metrics.screenWidth - 20,
    alignSelf: 'center',
    borderRadius: 5
  },
  mapButtonsContainer: {
    flexDirection: 'row',
    flex: 1,
    width: Metrics.screenWidth - 20,
    height: 45,
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  directionsButton: {
    flex: 1,
    backgroundColor: Colors.transBlack,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.transWhite
  },
  callButton: {
    flex: 1,
    backgroundColor: Colors.transBlack,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: Colors.transWhite
  },
  mapButtonsLabel: {
    color: 'white',
    fontSize: 18,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginLeft: 5
  },
  detailsContainer: {
    backgroundColor: Colors.charcoal,
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 20,
    width: Metrics.screenWidth - 20,
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2,
    borderRadius: 5
  },
  line: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: Colors.lightGray,
    width: Metrics.screenWidth - 40,
    height: 0.5
  },
  image: {
    flex: 1,
    width: Metrics.screenWidth - 20
  },
  labelContainer: {
    flex: 3,
    alignItems: 'flex-start',
    paddingBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  discrepancyContainer: {
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    width: Metrics.screenWidth - 40,
    height: 40,
    backgroundColor: Colors.lightGray
  },
  submitButton: {
    justifyContent: 'center',
    height: 40,
    marginTop: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    borderColor: Colors.white,
    borderRadius: 5,
    borderWidth: 1
  },
  separatorLine: {
    height: 1.5,
    width: Metrics.screenWidth - 40,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  divider: {
    alignSelf: 'center',
    marginTop: -10
  }
})
