import { VenueActions } from '../Actions/VenueActions'

// User shape
const INITIAL_STATE = {
  venueList: {},     // require('../../Fixtures/venues.json').venues,
  selectedVenue: null,
  fetching: false
}

function getVenuesList (state, payload) {
  switch (payload.response.status) {
    case 200:
      state.venueList = payload.response.body
      return {
        ...state
        // fetching: false,
        // error: null
      }
    default:
      return {
        ...state,
        error: 'Failed to Request - Check Network'
      }
  }
}

export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VenueActions.REQUEST_VENUES:
      return {
        ...state,
        fetching: true
      }
    case VenueActions.RECEIVE_VENUES:
      return getVenuesList(state, action.payload)
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
