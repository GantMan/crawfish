'use strict'

import React, { ScrollView, View, MapView, LinkingIOS, TouchableHighlight, Image, Text, TextInput, DeviceEventEmitter } from 'react-native'
// import { Routes } from '../Navigation/'
import _ from 'lodash'
import {connect} from 'react-redux/native'
import {Icon} from 'react-native-icons'
import styles from '../Styles/DetailsScreenStyle'
import { Images, Metrics } from '../Themes'

class DetailsScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      currentVenue: {},
      inputPrice: '',
      visibleHeight: Metrics.screenHeight
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    latitude: React.PropTypes.string,
    longitude: React.PropTypes.string,
    selectedVenue: React.PropTypes.string,
    venueList: React.PropTypes.array,
    inputPrice: React.PropTypes.string
  }

  componentWillMount () {
    let currentVenueIndex = _.findIndex(this.props.venueList, 'name', this.props.selectedVenue)
    this.setState({ currentVenue: this.props.venueList[currentVenueIndex] || this.props.venueList[0] })
    this.props.navigator.setState({
      leftButton: null
      // rightButton: null
    })
    DeviceEventEmitter.addListener('keyboardDidShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener('keyboardDidHide', this.keyboardWillHide.bind(this))
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  visitAddress (address) {
    // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
    // let cleanAddress = Utilities.nullifyNewlines(address)
    // let url = `http://maps.apple.com/?address=${cleanAddress}`
    LinkingIOS.openURL('tel:1-504-450-9539')
  }

  submitButton () {
    console.log(this.state.inputPrice, this.state.currentVenue.name, this.state.currentVenue.yelp_id)
    this.refs.inputPrice.blur()
    // LinkingIOS.openURL('tel:1-504-909-4268')
    // window.alert(this.state.inputPrice, 'Submitting')
  }

  handleClosed (closed) {
    if (closed === 'true') {
      return ('No')
    } else if (closed === 'false') {
      return ('Yes')
    }
  }

  textChanged (newText) {
    this.state.inputPrice = newText
  }

  keyboardWillShow (e) {
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
    this.refs.scrolly.scrollTo(475, 0)
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Metrics.screenHeight})
    if (this.refs.scrolly) this.refs.scrolly.scrollTo(0, 0)
  }

  render () {
    return (
      <View style={[styles.background, {height: this.state.visibleHeight}]}>
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>
        <ScrollView ref='scrolly' keyboardShouldPersistTaps style={styles.scroll}>
          <View style={styles.mapContainer}>
            <MapView style={styles.map}
              scrollEnabled = {false}
              region = {{
                latitude: parseFloat(this.state.currentVenue.latitude),
                longitude: parseFloat(this.state.currentVenue.longitude),
                latitudeDelta: 0.08,
                longitudeDelta: 0.08
              }}
              annotations={[
                {latitude: parseFloat(this.state.currentVenue.latitude), longitude: parseFloat(this.state.currentVenue.longitude)}
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
              <Text allowFontScaling={false} style={styles.header}>{this.state.currentVenue.name}</Text>
            </View>
            <View>
              <View style={styles.separatorLine}/>
              <Image style={styles.divider} source={Images.divider} />
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

            <Text style={[styles.dataLabel, {alignSelf: 'center', marginTop: 20}]}>Price Discrepancy?</Text>
            <View style={styles.textInputContainer}>
              <Text style={styles.priceLabel}>Price:</Text>
              <TextInput
                // clearButtonMode='always'
                enablesReturnKeyAutomatically
                blurOnSubmit
                keyboardAppearance='dark'
                ref='inputPrice'
                keyboardType='numeric'
                returnKeyType='default'
                style={styles.textInput}
                onChangeText={this.textChanged.bind(this)}
                textAlign='center'
                placeholder='$'
                value={this.state.inputPrice}
              />
            </View>
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
