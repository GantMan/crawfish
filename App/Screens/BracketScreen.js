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

  componentWillMount () {
    let currentVenueIndex = _.findIndex(this.props.venueList, 'name', this.props.selectedVenue)
    this.setState({ currentVenue: this.props.venueList[currentVenueIndex] || this.props.venueList[0] })
    this.props.navigator.setState({
      leftButton: null
      // rightButton: null
    })
  }

  submitButton () {
    window.alert('Submitting')
  }

  render () {
    return (
      <View style={styles.background}>
        <Image source={require('../Images/wallpaper.jpg')}/>
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
