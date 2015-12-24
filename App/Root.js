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
    return (
      <Provider store={store}>
        { () => this.renderApp() }
      </Provider>
    )
  }
}

