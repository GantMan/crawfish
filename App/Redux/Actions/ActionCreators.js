// helper
const createAction = (type, params = null) => ({ type, ...params })

// Getting a list of venues
export const venuesSuccess = (venues) => createAction('VENUES_SUCCESS', { venues, time: Date.now() })
export const venuesAPIFailure = () => createAction('VENUES_FAILURE')

export const setVenue = (venue) => createAction('SELECT_VENUE', { venue, time: Date.now() })
