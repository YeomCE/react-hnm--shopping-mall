import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer';
import rootReducer from './reducers'

let store = createStore(rootReducer,applyMiddleware(thunk))

export default store

