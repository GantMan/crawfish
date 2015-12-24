'use strict'

import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../Reducers/'

// middleware that injects into the store chain
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

let finalCreateStore = null
// Logger is available ONLY in dev
if (__DEV__) {
  // log the state changes
  const logger = createLogger({
    predicate: () => __DEV__
  })
  // NOTE:  it's important that logger is last apparently.
  // https://github.com/fcomb/redux-logger/issues/20
  finalCreateStore = applyMiddleware(
    promise,
    thunk,
    logger
  )(createStore)
} else {
  finalCreateStore = applyMiddleware(
    promise,
    thunk
  )(createStore)
}

export default (initialState) => { return finalCreateStore(RootReducer) }
