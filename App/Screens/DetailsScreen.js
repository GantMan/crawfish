'use strict'

import React, { ScrollView, View, MapView, TouchableHighlight, Image, Text, TextInput } from 'react-native'
// import { Routes } from '../Navigation/'
import _ from 'lodash'
import {connect} from 'react-redux/native'
import styles from '../Styles/DetailsScreenStyle'

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
    this.setState({currentVenue: this.props.venueList[currentVenueIndex]})
  }

  render () {
    return (
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>
        <ScrollView>
          <View style={styles.mapContainer}>
            <MapView style={styles.map}
              scrollEnabled = {false}
              region = {{
                latitude: 29.95,
                longitude: -90.1,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15
              }}
              annotations={[
                {latitude: 29.95, longitude: -90.1}
              ]}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.headerContainer}>
              <Text allowFontScaling={false} style={styles.header}>{this.state.currentVenue.name}</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Address</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Phone</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Hours</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>HELLO</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Rating</Text>
              <Text allowFontScaling={false} style={styles.dataLabel}>* * * *</Text>
            </View>

            <View style={styles.line}/>

            <TextInput
              style={styles.discrepancyContainer}
              placeholder='Enter New Price'
              placeholderColor='red'
              textAlign='center'
            />
            <TouchableHighlight
              style={styles.submitButton}
              underlayColor='red'
            >
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 16}}>Submit</Text>
            </TouchableHighlight>
          </View>
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
