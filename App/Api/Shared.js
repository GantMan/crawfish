'use strict'

// All (non-fixture) API Responses flow through here.
export const handleResponse = (callback) => (response) => {
  // Place to do extra stuff: here

  callback(response)
}
