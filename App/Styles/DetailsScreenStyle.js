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
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.white,
    width: Metrics.screenWidth - 40,
    alignSelf: 'center'
  },
  header: {
    alignSelf: 'center',
    fontSize: Metrics.fonts.normal,
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
  mapContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    height: 200,
    width: Metrics.screenWidth - 20,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
  },
  detailsContainer: {
    backgroundColor: Colors.charcoal,
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 20,
    width: Metrics.screenWidth - 20,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 2
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
    alignItems: 'center',
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
  }
})
