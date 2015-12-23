'use strict'

import React, {View, Navigator} from 'react-native'
import {Router, Routes, NavigationBar} from './Navigation/'

export default class Crawfish extends React.Component {
  constructor (props) {
    super(props)
    console.log(Routes, Router, NavigationBar)
  }

  render () {
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
}

