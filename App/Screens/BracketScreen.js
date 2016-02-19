'use strict'

import React, { ScrollView, View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
// import { Routes } from '../Navigation/'
import _ from 'lodash'
import {connect} from 'react-redux/native'
import {Icon} from 'react-native-icons'
import styles from '../Styles/DetailsScreenStyle'
import Bracket from '../Components/Bracket'

class DetailsScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      currentVenue: {}
      // <Image source={require('../Images/wallpaper.jpg')}/>
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    latitude: React.PropTypes.string,
    longitude: React.PropTypes.string,
    selectedVenue: React.PropTypes.string,
    venueList: React.PropTypes.array
  }

  render () {
    return (
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={require('../Images/wallpaper.jpg')}/>
        <View style={{top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', backgroundColor: 'rgba(255,255,255,0.15)'}}/>
        <ScrollView style={{paddingTop: 100}}>

            <Bracket />

        </ScrollView>
      </View>

    )
  }
}

function mapStateToProps (state) {
  return {
    selectedVenue: state.venue.selectedVenue,
    venueList: state.venue.venueList
  }
}

export default connect(mapStateToProps)(DetailsScreen)
