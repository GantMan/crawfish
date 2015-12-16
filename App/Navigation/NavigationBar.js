'use strict'

import React from 'react-native'
import NavigationBarRouteMapper from './NavigationBarRouteMapper'

const { Navigator } = React

export default {
  render () {
    return (
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
      />
    )
  }
}
