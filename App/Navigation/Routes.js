'use strict'

export default new class Routes {
  get MainScreen () {
    return {
      title: 'Welcome to Crawfish',
      component: require('../Screens/MainScreen')
    }
  }
}
