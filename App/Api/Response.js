'use strict'
import _ from 'lodash'

export default class Response {

  // hold the err & res passed from the Superagent library
  constructor (err, res) {
    this.err = err
    this.res = res
  }

  // the HTTP status code
  get status () {
    return _.get(this.res, 'status', 0)
  }

  // was the request successful?
  get ok () {
    return this.res.ok
  }

  // was there an error thrown?
  get error () {
    return this.res.error
  }

  // was this an application 4xx error?
  get clientError () {
    return this.res.clientError
  }

  // was this a server 5xx error?
  get serverError () {
    return this.res.serverError
  }

  // return the body (which is the root JSON element)
  get body () {
    if (this.res === null || this.res === undefined) return null
    if (this.res.body === null || this.res.body === undefined) return null
    return this.res.body
  }

  // fetch all the response headers
  get headers () {
    return this.res.headers
  }

  // fetch a specific response header
  header (key) {
    return this.res.header[key]
  }

}
