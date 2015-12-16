'use strict'

import React, { Text } from 'react-native'

export default {
  LeftButton (route, navigator, index, navState) {
    if (navState.leftButton) {
      return navState.leftButton
    }
  },

  RightButton (route, navigator, index, navState) {
    if (navState.rightButton) {
      return navState.rightButton
    }
  },

  Title (route, navigator, index, navState) {
    return (
      <Text>
        {navState.title || route.title}
      </Text>
    )
  }
}
