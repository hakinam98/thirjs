import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Movies } from './movies'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(movies: Movies)
    applyMiddleware(thunk, logger)
}
