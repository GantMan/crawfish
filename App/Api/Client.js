'use strict'

import Superagent from 'superagent'
import Response from './Response'

const ENDPOINT = 'http://localhost:3000/'

// ------------- For Production ---------
// const ENDPOINT = 'https://www.wheredatcrawfish.com'
// const API_VERSION = 1

export default class Client {

  get fullDomain () {
    let uri = ENDPOINT
    // if (API_VERSION) {
    //   uri = `${uri}/${API_VERSION}/`
    // }

    return uri
  }

  get (path, qsv, callback) {
    Superagent
      .get(this.fullDomain + path)
      .query(qsv || {})
      .set('Accept', 'application/json')
      .end((err, res) => {
        let response = new Response(err, res)
        callback(response)
      })
  }

  post (path, postData, callback) {
    Superagent
      .post(this.fullDomain + path)
      .send(postData || {})
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end((err, res) => {
        const response = new Response(err, res)
        callback(response)
      })
  }

}
