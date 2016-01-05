'use strict'

import React, { ScrollView, View, MapView, TouchableHighlight, Image, Text, TextInput } from 'react-native'
// import { Routes } from '../Navigation/'
import _ from 'lodash'
import {connect} from 'react-redux/native'
import {Icon} from 'react-native-icons'
import styles from '../Styles/DetailsScreenStyle'
import { Images } from '../Themes'

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
  }

  submitButton () {
    window.alert('Submitting')
  }

  handleClosed (closed) {
    if (closed === 'true') {
      return ('No')
    } else if (closed === 'false') {
      return ('Yes')
    }
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
                latitude: 29.96,
                longitude: -90.1,
                latitudeDelta: 0.20,
                longitudeDelta: 0.20
              }}
              annotations={[
                {latitude: `${this.state.currentVenue.latitude}`, longitude: `${this.state.currentVenue.longitude}`}
              ]}
            />
            <View style={styles.mapButtonsContainer}>
              <TouchableHighlight
                style={styles.directionsButton}
                underlayColor='red'
                onPress={this.submitButton.bind(this)}
              >
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'fontawesome|location-arrow'}
                    size={20}
                    color={'white'}
                    style={{width: 20, height: 20, marginTop: 0, marginLeft: 0}}
                  />
                  <Text allowFontScaling={false} style={styles.mapButtonsLabel}>Directions</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.callButton}
                underlayColor='red'
                onPress={this.submitButton.bind(this)}
              >
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'fontawesome|phone'}
                    size={20}
                    color={'white'}
                    style={{width: 20, height: 20, marginTop: 0, marginLeft: 0}}
                  />
                  <Text allowFontScaling={false} style={styles.mapButtonsLabel}>Call</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.headerContainer}>
              <Text allowFontScaling={false} style={styles.header}>Info</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <View style={{height: 1.5, width: 350, backgroundColor: 'white', alignSelf: 'center'}}></View>
              <Image style={{alignSelf: 'center', marginTop: -10}} source={Images.divider} />
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Name</Text>
              <View style={styles.dataContainer}>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.name}</Text>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Address</Text>
              <View style={styles.dataContainer}>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.address}</Text>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.city}, {this.state.currentVenue.state} {this.state.currentVenue.zip}</Text>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Phone</Text>
              <View style={styles.dataContainer}>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.phone}</Text>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Hours</Text>
              <View style={styles.dataContainer}>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.hours}</Text>
                <Text allowFontScaling={false} style={styles.dataLabel}>{this.state.currentVenue.closed}</Text>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <Text allowFontScaling={false} style={styles.boldLabel}>Rating</Text>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Image style={{width: 100, height: 20, alignSelf: 'flex-start'}} resizeMode='contain' source={{uri: this.state.currentVenue.rating_url}}/>
              </View>
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
              onPress={this.submitButton.bind(this)}
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
