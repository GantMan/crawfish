import { take } from 'redux-saga'
import VenueActions from '../Actions/VenueActions'
import Client from '../../Api/Client'
import Api from '../../Api/Api'
import VenueSagas from './VenueSagas'

// our client & api
const client = Client()
const api = Api(client)

// initialize our individual saga modules
const venuesSagas = VenueSagas(api)

// when the app comes to life
function * startup () {
  yield take(VenueActions.REQUEST_VENUES)
}

// auto-start these guys
export default [
  startup,
  venuesSagas.fetchVenueList
]
