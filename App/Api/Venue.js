import DebugSettings from '../Config/DebugSettings'
import {handleResponse} from './Shared'

export function fetchVenues (client, callback) {
  if (DebugSettings.useFixtures) {
    callback({
      status: 200,
      body: require('../Fixtures/venues.json')
    })
  } else {
    client.get('venues', {}, handleResponse(callback))
  }
}
