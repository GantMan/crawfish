import * as Venue from '../../Api/Venue'

export const VenueActions = {
  REQUEST_VENUES: 'REQUEST_VENUES',
  RECEIVE_VENUES: 'RECEIVE_VENUES',
  VENUES_SUCCESS: 'VENUES_SUCCESS',
  VENUES_FAILURE: 'VENUES_FAILURE',
  SELECT_VENUE: 'SELECT_VENUE'
}

let VenueActionCreators = {

  fetchVenues: () => (dispatch, getState) => {
    dispatch({
      type: VenueActions.REQUEST_VENUES,
      payload: {
        time: Date.now()
      }
    })

    let client = getState().api.client
    Venue.fetchVenues(client, (response) => {
      dispatch({
        type: VenueActions.RECEIVE_VENUES,
        payload: {
          time: Date.now(),
          response: response
        }
      })
    })
  }
}

export { VenueActionCreators }
