import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import studentReducer from '../reducers/studentReducer'

const root = {
    students : studentReducer
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore