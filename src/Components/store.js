import {createStore,combineReducers} from 'redux';
import EmployeeDetailsReducer,{EmployeePerformanceReducer} from './reducer';

//export const MyReduxStore = createStore(EmployeeDetailsReducer);
const rootreducer = combineReducers({EmployeeDetailsReducer,performanceReducer:EmployeePerformanceReducer})

export const MyReduxStore = createStore(rootreducer);