'use strict'

import React from 'react-native'
import NavigationBarRouteMapper from './NavigationBarRouteMapper'
import styles from '../Styles/NavigationStyle'

const { Navigator } = React

export default {
  render () {
    return (
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={styles.navigationBar}
      />
    )
  }
}
