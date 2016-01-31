import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../Themes/'

let containerStyle = {
  flexDirection: 'row',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: Colors.lightGray,
  justifyContent: 'space-between',
  height: 40
}

let textStyle = {
  fontSize: Metrics.fonts.medium,
  alignSelf: 'center',
  textAlign: 'left',
  paddingLeft: 10
}

export default StyleSheet.create({
  mainContainer: {
    position: 'relative',
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  containerDefault: {
    ...containerStyle
    // backgroundColor: Colors.silver
  },
  container: {
    ...containerStyle
  },
  fileComponentContainer: {
    paddingLeft: 5,
    flexDirection: 'row'
  },
  dropdownIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  dropdownTextDefault: {
    ...textStyle,
    color: Colors.lightGray
  },
  dropdownText: {
    ...textStyle,
    color: Colors.white
  }
})
