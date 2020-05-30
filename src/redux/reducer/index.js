import { combineReducers } from 'redux'
import fcfs from './fcfs';
import sjn from './sjn'
import lru from './lru'
const rootReducer = combineReducers({
  fcfs,
  sjn,
  lru
  
});

export default  rootReducer;