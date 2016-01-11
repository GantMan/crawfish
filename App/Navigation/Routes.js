'use strict'

export default new class Routes {
  get MainScreen () {
    return {
      title: 'Welcome to Crawfish',
      component: require('../Screens/MainScreen')
    }
  }

  get VenuesListScreen () {
    return {
      title: 'CRAWFISH',
      component: require('../Screens/VenuesListScreen'),
      rightButton: 'SEARCH',
      leftButton: 'FAVORITE'
    }
  }

  get DetailsScreen () {
    return {
      title: 'DETAILS',
      component: require('../Screens/DetailsScreen')
    }
  }
}
