'use strict'

import { VenueActions } from '../Actions/VenueActions'

// User shape
const INITIAL_STATE = {
  venueList: require('../../Fixtures/venues.json').venues,
  selectedVenue: null,
  fetching: false
}

export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VenueActions.REQUEST_VENUES:
      return {
        ...state,
        fetching: true
      }
    case VenueActions.RECEIVE_VENUES:
      return {
        ...state,
        fetching: true
      }
    case VenueActions.SELECT_VENUE:
      return {
        ...state,
        selectedVenue: action.venue
      }
    default:
      return state
  }
}

export default { venue: reducer }
