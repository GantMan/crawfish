'use strict'

import { combineReducers } from 'redux'
import VenuesReducers from './Venue'

// glue all the reducers together
export default combineReducers({
  ...VenuesReducers
})
