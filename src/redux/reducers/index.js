import queryParameterReducer from './queryParameter'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({ queryParameter: queryParameterReducer })

export default rootReducers
