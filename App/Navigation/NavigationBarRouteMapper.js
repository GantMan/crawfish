'use strict'

import React, { Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/NavigationStyle'
import NavButtons from './NavButtons'

export default {

  CreateButton (button_id, navigator) {
    switch (button_id) {
      case 'SEARCH':
        return NavButtons.searchButton(navigator.state.tapSearch)
      case 'FAVORITE':
        return NavButtons.favoritesButton(navigator.state.tapFavorites, navigator.state.favoritesOn)
      default:
        return null
    }
  },

  LeftButton (route, navigator, index, navState) {
    if (navState.leftButton) {
      return navState.leftButton
    } else if (route.leftButton) {
      return this.CreateButton(route.leftButton, navigator)
    // This is dirty but currently needs to be done due to NavBar limitations
    } else if (index > 0 && route.title !== 'Dashboard') {
      return (
        <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )
    }
  },

  RightButton (route, navigator, index, navState) {
    // if (navState.rightButton) {
    //   return navState.rightButton
    // }
    if (route.rightButton) {
      return this.CreateButton(route.rightButton, navigator)
    }
  },

  Title (route, navigator, index, navState) {
    return (
      <Text allowFontScaling={false} style={styles.navTitle}>
        {navState.title || route.title}
      </Text>
    )
  }
}
