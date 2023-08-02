import { combineReducers } from 'redux'
import { authReducer } from './authReducers'

const rootReduser = combineReducers({
  //рут редюсер передается в index.js
  auth: authReducer,
})

export default rootReduser
