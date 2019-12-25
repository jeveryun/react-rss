import { combineReducers } from 'redux'
import counter from './counter.js'
import home from './home'
import session from './session'

let reducers = combineReducers({
  counter,
  home,
  session
})

export default reducers