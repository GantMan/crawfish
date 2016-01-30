'use strict'

import { combineReducers } from 'redux'
import VenueReducers from './Venue'

// glue all the reducers together
export default combineReducers({
  ...VenueReducers
})
