import {createStore ,applyMiddleware} from 'redux'


import {thunk}  from 'redux-thunk'
import CompineRedcucer from './Reducers/CombineRedcucer'
import { composeWithDevTools } from 'redux-devtools-extension'
const initialsState={};
const appmidlle=[thunk];

const store=
    // createStore (CompineRedcucer,initialsState,composeWithDevTools(applyMiddleware(...appmidlle)))
createStore (CompineRedcucer,composeWithDevTools())
        

export default store