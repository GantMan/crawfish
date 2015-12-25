'use strict'

import React, { Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/NavigationStyle'

export default {
  LeftButton (route, navigator, index, navState) {
    if (navState.leftButton) {
      return navState.leftButton

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
    if (navState.rightButton) {
      return navState.rightButton
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
