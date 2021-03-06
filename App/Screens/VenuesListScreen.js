'use strict'

import React, { ScrollView, ListView, TouchableOpacity, Image, View, Text, Modal } from 'react-native'
import { Routes } from '../Navigation/'
import VenueCell from '../Components/VenueCell'
import styles from '../Styles/VenuesListScreenStyle'
import {connect} from 'react-redux/native'
import Search from '../Components/Search'
import {Icon} from 'react-native-icons'
import * as actions from '../Redux/Actions/ActionCreators'
import { Colors, Fonts, Metrics } from '../Themes'
import _ from 'lodash'

class VenuesListScreen extends React.Component {

  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds,
      showModal: false,
      favoritesOn: false,
      userLat: '',
      userLon: ''
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    venueList: React.PropTypes.array,
    userLat: React.PropTypes.string,
    userLon: React.PropTypes.string
  }

  toggleVenueFavorite (rowData) {
    window.alert(rowData.name)
  }

  componentDidMount () {
    this.props.navigator.setState({
      tapFavorites: this.favoritesToggle.bind(this),
      tapSearch: () => this.setState({showModal: true}),
      tapLogin: this.userLogin.bind(this)
    })
  }

  componentWillMount () {
    this.getLocation()
  }

  userLogin () {
    this.props.navigator.push(Routes.LoginScreen)
  }

  favoritesToggle () {
    let newFavorites = {favoritesOn: !this.state.favoritesOn}
    this.props.navigator.setState(newFavorites)
    this.setState(newFavorites)
  }

  cellPress (rowData) {
    // this.props.dispatch({ type: 'SELECT_VENUE', venue: rowData.name, time: Date.now() })
    this.props.dispatch(actions.setVenue(rowData.name))
    this.props.navigator.push(Routes.DetailsScreen)
  }

  getLocation () {
    navigator.geolocation.getCurrentPosition(
      (position) => this.gotPosition(position),
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    )
  }

  getDistanceFromLatLonInMiles (lat1, lon1, lat2, lon2) {
    let R = 3959 // Radius of the earth in mi
    let dLat = this.deg2rad(lat2 - lat1) // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c // Distance in mi
    let dist = Math.round(d * 100) / 100 // Round to two decimals
    // console.log(dist, 'DISTANCE')
    return (dist)
  }

  deg2rad (deg) {
    return deg * (Math.PI / 180)
  }

  gotPosition (position) {
    this.setState({
      userLat: position.coords.latitude,
      userLon: position.coords.longitude
    })
    console.log(this.state.userLat, this.state.userLon, 'User Position')
  }

  customRowRender (rowData) {
    return (
      <TouchableOpacity onPress={this.cellPress.bind(this, rowData)}>
        <VenueCell
        imageUri={rowData.picture}
        yelpPicture={rowData.yelp_picture}
        title={rowData.name}
        address={rowData.address}
        city={rowData.city}
        distance={this.getDistanceFromLatLonInMiles(this.state.userLat, this.state.userLon, rowData.latitude, rowData.longitude)}
        crawfishBoiled={rowData.crawfish_boiled}
        ratingUrl={rowData.rating_url}
        favorite={rowData.favorite}
        toggleFavorite={this.toggleVenueFavorite.bind(this, rowData)}
        />
      </TouchableOpacity>
    )
  }

  // TODO Move this to its own component
  renderModalSearch () {
    return (
      <Modal
        animated
        transparent
        visible={this.state.showModal}
      >
        <View style={{top: 64, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center'}}>
          <View style={{height: 150, backgroundColor: '#383a3d', padding: 10, margin: 20, borderRadius: 5, flex: 1}}>
            <Text style={{color: 'white'}}>Search View Yo</Text>
            <Text style={{color: 'white'}}>This is where you'd make search stuff</Text>
            <TouchableOpacity style={{height: 30, backgroundColor: '#000', borderRadius: 5, justifyContent: 'center'}} onPress={() => this.setState({showModal: false})}>
              <Text style={{color: 'white', width: 100, textAlign: 'center', alignSelf: 'center'}}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  venues () {
    if (this.state.favoritesOn) {
      let favorites = _.filter(this.props.venueList, (v) => {
        return v.favorite === 'true'
      })
      console.log(favorites)
      return favorites
    } else {
      return this.props.venueList
    }
  }

  handleSearchPress (data) {
    console.log(data)
    this.setState({showModal: false})
  }

  closeHeader () {
    window.alert('Closing')
  }

  makeHeader () {
    return (
      <View style={{flex: 1, paddingLeft: 10, marginBottom: 10, height: 30, flexDirection: 'row', backgroundColor: Colors.lightGray}} >
        <Text allowFontScaling={false} style={{flex: 1, fontSize: Metrics.fonts.regular, color: Colors.charcoal, fontFamily: Fonts.bold, alignSelf: 'center'}}>Filtered Results</Text>
        <TouchableOpacity onPress={this.closeHeader.bind(this)} style={{width: 20, height: 20, justifyContent: 'center', alignSelf: 'center'}}>
          <Icon
            name='fontawesome|times-circle'
            size={16}
            width={20}
            height={20}
            color={Colors.charcoal}
            style={{alignSelf: 'flex-end', flex: 1, marginRight: 10, alignItems: 'center'}}
          />
        </TouchableOpacity>
      </View>
    )
  }

// <Image source={require('../Images/lightWood.jpg')}>
  render () {
    return (
      <View style={styles.background}>
        <Search
          isVisible={this.state.showModal}
          onPress={this.handleSearchPress.bind(this)}
        />
        <Image style={styles.backgroundImage} source={require('../Images/lightWood.jpg')}/>
        <View style={styles.overlay}/>
        <ScrollView>
          <ListView
            renderSectionHeader={this.makeHeader.bind(this)}
            style={styles.listy}
            dataSource={this.state.dataSource.cloneWithRows(this.venues())}
            renderRow={this.customRowRender.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    venueList: state.venue.venueList
  }
}

export default connect(mapStateToProps)(VenuesListScreen)
