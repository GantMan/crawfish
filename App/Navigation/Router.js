'use strict'

import React from 'react-native'

export default {
  renderScene (route, navigator) {
    return React.createElement(route.component, {
      navigator: navigator
    })
  }

  // configureScene (route) {

  // }
}
