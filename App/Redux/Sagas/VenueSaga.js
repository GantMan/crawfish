import { take, put, call } from 'redux-saga'
import VenueActions from '../Actions/VenueActions'
import * as actions from '../Actions/ActionCreators'

export default (api) => {
  function * fetchVenueList () {
    while (true) {
      yield take(VenueActions.REQUEST_VENUES) // STEP: Ask for venues from server
      try {
        let response = yield call(api.getVenues) // STEP: Call the api
        yield put(actions.venuesSuccess(response)) // STEP: dispatch our results
      } catch (error) {
        yield put(actions.venuesAPIFailure())
      }
    }
  }

  return { fetchVenueList }
}
