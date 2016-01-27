'use strict'

import React, {View, Navigator} from 'react-native'
import {Router, Routes, NavigationBar} from './Navigation/'
// REDUX
import { Provider } from 'react-redux/native'
import configureStore from './Redux/Store/ConfigureStore'
let store = configureStore()

export default class Crawfish extends React.Component {
  constructor (props) {
    super(props)
    console.log(Routes, Router, NavigationBar)
  }

  requestLocation () {
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

  getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2) {
    let R = 3959 // Radius of the earth in mi
    let dLat = this.deg2rad(lat2 - lat1) // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c // Distance in mi
    let dist = Math.round(d * 100) / 100 // Round to two decimals
    console.log(dist, 'DISTANCE')
  }

  deg2rad (deg) {
    return deg * (Math.PI / 180)
  }

  gotPosition (position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    console.log(lat, lon)
    this.getDistanceFromLatLonInKm(lat, lon, 30.999, -90.999)
  }

  renderApp () {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={Routes.VenuesListScreen}
          renderScene={Router.renderScene}
          navigationBar={NavigationBar.render()}
        />
      </View>
    )
  }

  render () {
    // the extra wrapper of the function inside provider
    // is a limitation of the 3.x codebase of react-redux
    // that will go away shortly, revisit later.
    this.requestLocation()
    return (
      <Provider store={store}>
        { () => this.renderApp() }
      </Provider>
    )
  }
}

